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
from hospital.serializers import  NoteSerializer, PatientCardSerializer, CommunicationCardSerializer, StockSerializer, PopulationCardSerializer, OrderSerializer
from hospital.models import Note, PatientCard, CommunicationCard, PopulationCard, Stock, Order
from django.contrib.auth.decorators import login_required, user_passes_test

import time
from django.db.models import Sum

def webhook(request):
    if request.method == 'POST':
        # Gelen JSON verisini al
        payload = json.loads(request.body)

        # Webhook verisini işleme
        event = payload.get('event')
        message_data = payload.get('data', {})
        message_content = message_data.get('message', {}).get('content')
        
        # Veritabanına kaydetme veya başka işlemler
        print(f"New message received: {message_content}")
        print(f"New payload received: {payload}")

        # İstediğiniz şekilde işlemi yaptıktan sonra başarılı yanıt döndürün
        return JsonResponse({'status': 'success', 'message': 'Webhook processed successfully'})
    
    # Eğer POST isteği değilse
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})


class StockSummaryView(APIView):
    def get(self, request):
        # Stokları `stk` ve `ut` alanlarına göre grupla ve `buyed` ile `haved` alanlarını topla
        stock_data = (
            Stock.objects
            .values('stock_name', 'stock_skt')
            .annotate(total_buyed=Sum('stock_buyed'), total_haved=Sum('stock_haved'))
        )
        
        # Serializer aracılığıyla veriyi JSON formatına dönüştür
        serializer = StockSerializer(stock_data, many=True)
        return Response(serializer.data)


class NoteListCreateAPIView(generics.ListCreateAPIView):
    queryset= Note.objects.all()
    serializer_class=NoteSerializer

class NoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Note.objects.all()
    serializer_class=NoteSerializer

class PatientCardListCreateAPIView(generics.ListCreateAPIView):
    queryset= PatientCard.objects.all()
    serializer_class=PatientCardSerializer

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
    queryset= Stock.objects.all()
    serializer_class=StockSerializer

class StockDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Stock.objects.all()
    serializer_class=StockSerializer

class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset= Order.objects.all()
    serializer_class=OrderSerializer

class OrderDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Order.objects.all()
    serializer_class=OrderSerializer