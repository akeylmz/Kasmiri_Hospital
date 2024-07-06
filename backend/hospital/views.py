from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework import generics

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect, get_object_or_404
from hospital.serializers import ItemSerializer, NoteSerializer
from hospital.models import Item, Note
from django.contrib.auth.decorators import login_required, user_passes_test


class ItemListCreateAPIView(generics.ListCreateAPIView):
    queryset= Item.objects.all()
    serializer_class=ItemSerializer

class ItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Item.objects.all()
    serializer_class=ItemSerializer


class NoteListCreateAPIView(generics.ListCreateAPIView):
    queryset= Note.objects.all()
    serializer_class=NoteSerializer

class NoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Note.objects.all()
    serializer_class=NoteSerializer