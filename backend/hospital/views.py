import json
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework import generics

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect, get_object_or_404
from hospital.serializers import  NoteSerializer, PatientCardSerializer, CommunicationCardSerializer, PatientFilesSerializer, PatientPhotoSerializer, PollSerializer, StockSerializer, TaskCheckSerializer, WareHouseSerializer, WorkerFileSerializer, PatientNoteSerializer, WorkingHoursSerializer, LeaveSerializer, PopulationCardSerializer, OrderSerializer, WorkerSerializer, TaskAssignmentSerializer
from hospital.models import Note, PatientCard, CommunicationCard, PatientFiles, PatientPhoto, Poll, PopulationCard, Stock, Order, TaskCheck, WareHouse, Worker, TaskAssignment, Leave, WorkerFile, WorkingHours, PatientNote
from django.contrib.auth.decorators import login_required, user_passes_test
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from django_filters import rest_framework as filters
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.db.models import Sum
from django.db import models
from rest_framework.pagination import PageNumberPagination

def webhook(request):
    if request.method == 'POST':
        # Gelen JSON verisini al
        payload = json.loads(request.body)

        # Webhook verisini işleme
        event = payload.get('event')
        message_data = payload.get('data', {})
        message_content = message_data.get('message', {}).get('content')
        
        # WebSocket kanalına gönder
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "message_group",
            {
                "type": "send_message",
                "message": message_content,
            }
        )
        
        # Veritabanına kaydetme veya başka işlemler
        print(f"New message received: {message_content}")
        print(f"New payload received: {payload}")

        # İstediğiniz şekilde işlemi yaptıktan sonra başarılı yanıt döndürün
        return JsonResponse({'status': 'success', 'message': 'Webhook processed successfully'})
    
    # Eğer POST isteği değilse
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

#Filters
class StockFilter(filters.FilterSet):
    total_haved__lte = filters.NumberFilter(field_name='stock_haved', lookup_expr='lte')  # Küçük veya eşit

    class Meta:
        model = Stock
        fields = '__all__'  # Tüm alanları filtrelemeye dahil eder
        filter_overrides = {
            models.CharField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
            models.TextField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
        }

class PatientCardFilter(filters.FilterSet):
    class Meta:
        model = PatientCard
        exclude = ['patient_image']
        filter_overrides = {
            models.CharField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
            models.TextField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
        }

class OrderFilter(filters.FilterSet):
    class Meta:
        model = Order
        fields = '__all__'  # Tüm alanları filtrelemeye dahil eder
        filter_overrides = {
            models.CharField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
            models.TextField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
        }

class WorkerFilter(filters.FilterSet):
    class Meta:
        model = Worker
        exclude = ['worker_image']
        filter_overrides = {
            models.CharField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
            models.TextField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {'lookup_expr': 'icontains'},
            },
        }
#Summaries
class StockSummaryView(APIView):
    def get(self, request):
        # Filtreyi uygula
        filterset = StockFilter(request.GET, queryset=Stock.objects.all())
        
        if not filterset.is_valid():
            return Response(filterset.errors, status=400)

        # Filtrelenmiş verilerle gruplama ve hesaplama yap
        stock_data = (
            filterset.qs
            .values('stock_name', 'stock_skt', 'stcok_group')
            .annotate(total_buyed=Sum('stock_buyed'), total_haved=Sum('stock_haved'))
        )
        
        # Sayfalama işlemini yap
        paginator = PageNumberPagination()
        paginator.page_size = 10  # Her sayfa için 10 kayıt döndür
        
        # Sayfalı veriyi oluştur
        paginated_data = paginator.paginate_queryset(stock_data, request)
        
        # Sayfalı ve filtrelenmiş veriyi döndür
        return paginator.get_paginated_response(paginated_data)

class StockWarehouseSummaryView(APIView):
    def get(self, request):
        # Stokları `stk` ve `ut` alanlarına göre grupla ve `buyed` ile `haved` alanlarını topla
        filterset = StockFilter(request.GET, queryset=Stock.objects.all())
        
        if not filterset.is_valid():
            return Response(filterset.errors, status=400)
        
        stock_data = (
            filterset.qs
            .values('stock_name', 'stock_skt', 'stock_ut', 'stock_warehouse')
            .annotate(total_buyed=Sum('stock_buyed'), total_haved=Sum('stock_haved'))
        )
        
        # Serializer aracılığıyla veriyi JSON formatına dönüştür
        paginator = PageNumberPagination()
        paginator.page_size = 10  # Her sayfa için 10 kayıt döndür
        
        # Sayfalı veriyi oluştur
        paginated_data = paginator.paginate_queryset(stock_data, request)
        
        # Sayfalı veriyi döndür
        return paginator.get_paginated_response(paginated_data)

class StockTotalSummaryView(APIView):
    def get(self, request):
        # Stokları `stk` ve `ut` alanlarına göre grupla ve `buyed` ile `haved` alanlarını topla
        filterset = StockFilter(request.GET, queryset=Stock.objects.all())
        
        if not filterset.is_valid():
            return Response(filterset.errors, status=400)
        
        stock_data = (
            filterset.qs
            .values('stock_name')
            .annotate(total_buyed=Sum('stock_buyed'), total_haved=Sum('stock_haved'))
        )
        
        # Serializer aracılığıyla veriyi JSON formatına dönüştür
        paginator = PageNumberPagination()
        paginator.page_size = 10  # Her sayfa için 10 kayıt döndür
        
        # Sayfalı veriyi oluştur
        paginated_data = paginator.paginate_queryset(stock_data, request)
        
        # Sayfalı veriyi döndür
        return paginator.get_paginated_response(paginated_data)

#Views

class NoteListCreateAPIView(generics.ListCreateAPIView):
    queryset= Note.objects.all()
    serializer_class=NoteSerializer

class NoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Note.objects.all()
    serializer_class=NoteSerializer

class PatientCardListCreateAPIView(generics.ListCreateAPIView):
    queryset= PatientCard.objects.all()
    serializer_class=PatientCardSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = PatientCardFilter
    ordering_fields = [field.name for field in PatientCard._meta.fields]  # Tüm alanlar

class PatientCardDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= PatientCard.objects.all()
    serializer_class=PatientCardSerializer

class CommunicationCardListCreateAPIView(generics.ListCreateAPIView):
    queryset= CommunicationCard.objects.all()
    serializer_class=CommunicationCardSerializer

class CommunicationCardDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= CommunicationCard.objects.all()
    serializer_class=CommunicationCardSerializer

class PopulationCardListCreateAPIView(generics.ListCreateAPIView):
    queryset= PopulationCard.objects.all()
    serializer_class=PopulationCardSerializer

class PopulationCardDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= PopulationCard.objects.all()
    serializer_class=PopulationCardSerializer


class StockListCreateAPIView(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = StockFilter
    ordering_fields = [field.name for field in Stock._meta.fields]  # Tüm alanlar

class StockDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Stock.objects.all()
    serializer_class=StockSerializer


class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset= Order.objects.all()
    serializer_class=OrderSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = OrderFilter
    ordering_fields = [field.name for field in Order._meta.fields]  # Tüm alanlar

class OrderDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Order.objects.all()
    serializer_class=OrderSerializer


        
class WorkerListCreateAPIView(generics.ListCreateAPIView):
    queryset= Worker.objects.all()
    serializer_class=WorkerSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = WorkerFilter
    ordering_fields = [field.name for field in Worker._meta.fields]  # Tüm alanlar

class WorkerDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Worker.objects.all()
    serializer_class=WorkerSerializer

class TaskAssignmentListCreateAPIView(generics.ListCreateAPIView):
    queryset= TaskAssignment.objects.all()
    serializer_class=TaskAssignmentSerializer

class TaskAssignmentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= TaskAssignment.objects.all()
    serializer_class=TaskAssignmentSerializer

class WorkingHoursListCreateAPIView(generics.ListCreateAPIView):
    queryset= WorkingHours.objects.all().order_by('-id')
    serializer_class=WorkingHoursSerializer

class WorkingHoursDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= WorkingHours.objects.all()
    serializer_class=WorkingHoursSerializer


class LeaveListCreateAPIView(generics.ListCreateAPIView):
    queryset = Leave.objects.all().order_by('-start_date')  # start_date azalan sırada
    serializer_class=LeaveSerializer

class LeaveDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Leave.objects.all()
    serializer_class=LeaveSerializer

class WorkerFileListCreateAPIView(generics.ListCreateAPIView):
    queryset= WorkerFile.objects.all()
    serializer_class=WorkerFileSerializer

class WorkerFileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= WorkerFile.objects.all()
    serializer_class=WorkerFileSerializer

class PatientNoteListCreateAPIView(generics.ListCreateAPIView):
    queryset= PatientNote.objects.all()
    serializer_class=PatientNoteSerializer

class PatientNoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= PatientNote.objects.all()
    serializer_class=PatientNoteSerializer

class PatientPhotoListCreateAPIView(generics.ListCreateAPIView):
    queryset= PatientPhoto.objects.all()
    serializer_class=PatientPhotoSerializer

class PatientPhotoDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= PatientPhoto.objects.all()
    serializer_class=PatientPhotoSerializer

class PatientFilesListCreateAPIView(generics.ListCreateAPIView):
    queryset= PatientFiles.objects.all()
    serializer_class=PatientFilesSerializer

class PatientFilesDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= PatientFiles.objects.all()
    serializer_class=PatientFilesSerializer

class PollListCreateAPIView(generics.ListCreateAPIView):
    queryset= Poll.objects.all()
    serializer_class=PollSerializer

class PollDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Poll.objects.all()
    serializer_class=PollSerializer

class WareHouseListCreateAPIView(generics.ListCreateAPIView):
    queryset= WareHouse.objects.all()
    serializer_class=WareHouseSerializer

class WareHouseDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= WareHouse.objects.all()
    serializer_class=WareHouseSerializer

class TaskCheckListCreateAPIView(generics.ListCreateAPIView):
    queryset= TaskCheck.objects.all().order_by('-date')
    serializer_class=TaskCheckSerializer

class TaskCheckDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= TaskCheck.objects.all()
    serializer_class=TaskCheckSerializer