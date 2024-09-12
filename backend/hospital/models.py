from django.db import models
from django.forms import ValidationError
from django.utils import timezone

# Create your models here.
    
class Note(models.Model):
    note = models.CharField(max_length=255, verbose_name="Note")
    date = models.DateField(verbose_name="Date")
    start_clock = models.TimeField(verbose_name="Start Time")
    finish_clock = models.TimeField(verbose_name="Finish Time")
    
    def __str__(self):
            return f"{self.note} on {self.date}"
    
    class Meta:
        ordering = ['date', 'start_clock']
        verbose_name = "Not"
        verbose_name_plural = "Notlar"
        indexes = [
            models.Index(fields=['date']),
        ]

    def clean(self):
        if self.finish_clock <= self.start_clock:
            raise ValidationError("Bitiş saati, başlangıç saatinden sonra olmalıdır.")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

class PatientCard(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    patient_number = models.CharField(max_length=50, unique=True, blank=True, null=True)
    national_id = models.CharField(max_length=11, unique=True, blank=True, null=True, db_index=True)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    patient_image = models.ImageField(upload_to='images/patient_images/')
    place_of_birth = models.CharField(max_length=100, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)
    mother_name = models.CharField(max_length=100, blank=True, null=True)
    father_name = models.CharField(max_length=100, blank=True, null=True)
    patient_type = models.CharField(max_length=50, blank=True, null=True)
    insurance_info = models.CharField(max_length=40, blank=True, null=True)
    instagram_username = models.CharField(max_length=200, blank=True, null=True)  
    mobile_phone1 = models.CharField(max_length=20, blank=True, null=True)
    mobile_phone2 = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    seans_number = models.IntegerField(blank=True, null=True)
    device_name = models.CharField(max_length=255, blank=True, null=True)
    seans_days = models.CharField(max_length=255, blank=True, null=True)
    education_status = models.CharField(max_length=20,blank=True, null=True)
    occupation = models.CharField(max_length=100,blank=True, null=True)
    current_employer = models.CharField(max_length=100,blank=True, null=True)
    marital_status = models.CharField(max_length=10,blank=True, null=True)
    children_count = models.PositiveIntegerField(blank=True, null=True)
    referee = models.CharField(max_length=100,blank=True, null=True)
    institution_type = models.CharField(max_length=10,blank=True, null=True)
    applied_department = models.CharField(max_length=100,blank=True, null=True)
    applied_operation = models.CharField(max_length=100,blank=True, null=True)
    complaints = models.TextField(blank=True, null=True)
    medications = models.TextField(blank=True, null=True)  # Sürekli kullanılan ilaçlar
    existing_conditions = models.TextField(blank=True, null=True)  # Mevcut hastalıklar
    smoker = models.BooleanField(default=False)  # Sigara kullanımı
    past_surgeries = models.TextField(blank=True, null=True)  # Geçmiş operasyonlar
    allergies = models.TextField(blank=True, null=True)  # Alerjiler
    post_surgery_address = models.CharField(max_length=255, blank=True, null=True)  # Ameliyat sonrası kalınacak adres

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.national_id})"

    class Meta:
        verbose_name = "Patient Card"
        verbose_name_plural = "Patient Cards"
        ordering = ['last_name', 'first_name']

class Stock(models.Model):
    stock_name = models.CharField(max_length=100, blank=True, null=True)
    stock_buyed = models.IntegerField(default=0)
    stock_haved = models.IntegerField(default=0)
    stock_ut = models.DateField(blank=True, null=True)
    stock_skt = models.DateField(blank=True, null=True)
    stock_wharehouse = models.CharField(max_length=100, blank=True, null=True)
    stock_pozition = models.CharField(max_length=100, blank=True, null=True)
    stcok_group = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return f"{self.stock_name}"

class CommunicationCard(models.Model):
    patient = models.OneToOneField(PatientCard, on_delete=models.CASCADE, related_name='communication_card')
    address_type = models.CharField(max_length=100, blank=True, null=True)
    external_door_no = models.CharField(max_length=10, blank=True, null=True)
    internal_door_no = models.CharField(max_length=10, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    subdistrict = models.CharField(max_length=100, blank=True, null=True)
    village = models.CharField(max_length=100, blank=True, null=True)
    neighborhood = models.CharField(max_length=100, blank=True, null=True)
    street = models.CharField(max_length=100, blank=True, null=True)
    home_phone = models.CharField(max_length=20, blank=True, null=True)
    work_phone = models.CharField(max_length=20, blank=True, null=True)
    fax = models.CharField(max_length=20, blank=True, null=True)
    heard_about_us = models.CharField(max_length=255, blank=True, null=True)
    card_issued = models.BooleanField(default=False)
    want_to_be_informed_by_email = models.BooleanField(default=False)
    want_to_be_informed_by_sms = models.BooleanField(default=False)
    want_to_be_informed_by_phone = models.BooleanField(default=False)
    want_to_be_informed_by_post = models.BooleanField(default=False)

    def __str__(self):
        return f"Communication Card for {self.patient.first_name} {self.patient.last_name}"

    class Meta:
        verbose_name = "Communication Card"
        verbose_name_plural = "Communication Cards"

class PopulationCard(models.Model):
    patient = models.OneToOneField(PatientCard, on_delete=models.CASCADE, related_name='population_card')
    wallet_number = models.CharField(max_length=50, blank=True, null=True)
    marital_status = models.CharField(max_length=50, blank=True, null=True)
    id_type = models.CharField(max_length=50, blank=True, null=True)
    passport_number = models.CharField(max_length=50, blank=True, null=True)
    mother_national_id = models.CharField(max_length=11, blank=True, null=True)
    father_national_id = models.CharField(max_length=11, blank=True, null=True)
    declaration = models.CharField(max_length=50, blank=True, null=True)
    blood_type = models.CharField(max_length=10, blank=True, null=True)
    registry_type = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    neighborhood = models.CharField(max_length=100, blank=True, null=True)
    volume_number = models.CharField(max_length=50, blank=True, null=True)
    family_serial_number = models.CharField(max_length=50, blank=True, null=True)
    serial_number = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"Population Card for {self.patient.first_name} {self.patient.last_name}"

    class Meta:
        verbose_name = "Population Card"
        verbose_name_plural = "Population Cards"