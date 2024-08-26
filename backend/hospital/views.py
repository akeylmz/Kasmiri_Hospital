from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework import generics

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect, get_object_or_404
from hospital.serializers import  NoteSerializer, PatientCardSerializer, CommunicationCardSerializer, StockSerializer, PopulationCardSerializer
from hospital.models import Note, PatientCard, CommunicationCard, PopulationCard, Stock
from django.contrib.auth.decorators import login_required, user_passes_test

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