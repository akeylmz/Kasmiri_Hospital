# myapp/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.ItemListCreateAPIView.as_view(), name='item-list'),
    path('items/<int:pk>/', views.ItemDetailAPIView.as_view(), name='item-detail'),
    path('notes/', views.NoteListCreateAPIView.as_view(), name='item-list'),
    path('notes/<int:pk>/', views.NoteDetailAPIView.as_view(), name='item-detail'),
    path('patientcard/', views.PatientCardListCreateAPIView.as_view(), name='patientcard-list'),
    path('patientcard/<int:pk>/', views.PatientCardDetailAPIView.as_view(), name='patientcard-detail'),
    path('communicationcard/', views.CommunicationCardListCreateAPIView.as_view(), name='communicationcard-list'),
    path('communicationcard/<int:pk>/', views.CommunicationCardDetailAPIView.as_view(), name='communicationcard-detail'),
    path('populationcard/', views.PopulationCardListCreateAPIView.as_view(), name='populationcard-list'),
    path('populationcard/<int:pk>/', views.PopulationCardDetailAPIView.as_view(), name='populationcard-detail'),
]
