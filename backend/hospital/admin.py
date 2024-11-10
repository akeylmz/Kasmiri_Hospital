from django.contrib import admin
from hospital.models import  Note, Order, PatientCard, CommunicationCard, PopulationCard, Stock
# Register your models here.
admin.site.register(PatientCard)
admin.site.register(Stock)
admin.site.register(Order)
