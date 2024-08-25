# myapp/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.NoteListCreateAPIView.as_view(), name='item-list'),
    path('notes/<int:pk>/', views.NoteDetailAPIView.as_view(), name='item-detail'),
    path('patientcard/', views.PatientCardListCreateAPIView.as_view(), name='patientcard-list'),
    path('patientcard/<int:pk>/', views.PatientCardDetailAPIView.as_view(), name='patientcard-detail'),
    path('communicationcard/', views.CommunicationCardListCreateAPIView.as_view(), name='communicationcard-list'),
    path('communicationcard/<int:pk>/', views.CommunicationCardDetailAPIView.as_view(), name='communicationcard-detail'),
    path('populationcard/', views.PopulationCardListCreateAPIView.as_view(), name='populationcard-list'),
    path('populationcard/<int:pk>/', views.PopulationCardDetailAPIView.as_view(), name='populationcard-detail'),

    path('stock/', views.StockListCreateAPIView.as_view(), name='stock-list'),
    path('stock/<int:pk>/', views.StockDetailAPIView.as_view(), name='stock-detail'),
]
