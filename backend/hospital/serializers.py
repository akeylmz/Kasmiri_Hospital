from rest_framework import serializers
from hospital.models import  Note, PatientCard, CommunicationCard, PopulationCard, Stock
from django.db.models import Max, Count
from datetime import datetime



class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

    def create(self, validated_data):
        return Note.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.note = validated_data.get('note', instance.note)
        instance.date = validated_data.get('date', instance.date)
        instance.start_clock = validated_data.get('start_clock', instance.start_clock)
        instance.finish_clock = validated_data.get('finish_clock', instance.finish_clock)

        instance.save()
        return instance

class CommunicationCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunicationCard
        fields = '__all__'

    def create(self, validated_data):
        return CommunicationCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.address_type = validated_data.get('address_type', instance.address_type)
        instance.address = validated_data.get('address', instance.address)
        instance.external_door_no = validated_data.get('external_door_no', instance.external_door_no)
        instance.internal_door_no = validated_data.get('internal_door_no', instance.internal_door_no)
        instance.country = validated_data.get('country', instance.country)
        instance.city = validated_data.get('city', instance.city)
        instance.district = validated_data.get('district', instance.district)
        instance.subdistrict = validated_data.get('subdistrict', instance.subdistrict)
        instance.village = validated_data.get('village', instance.village)
        instance.neighborhood = validated_data.get('neighborhood', instance.neighborhood)
        instance.street = validated_data.get('street', instance.street)
        instance.home_phone = validated_data.get('home_phone', instance.home_phone)
        instance.work_phone = validated_data.get('work_phone', instance.work_phone)
        instance.mobile_phone1 = validated_data.get('mobile_phone1', instance.mobile_phone1)
        instance.mobile_phone2 = validated_data.get('mobile_phone2', instance.mobile_phone2)
        instance.fax = validated_data.get('fax', instance.fax)
        instance.email = validated_data.get('email', instance.email)
        instance.heard_about_us = validated_data.get('heard_about_us', instance.heard_about_us)
        instance.card_issued = validated_data.get('card_issued', instance.card_issued)
        instance.want_to_be_informed_by_email = validated_data.get('want_to_be_informed_by_email', instance.want_to_be_informed_by_email)
        instance.want_to_be_informed_by_sms = validated_data.get('want_to_be_informed_by_sms', instance.want_to_be_informed_by_sms)
        instance.want_to_be_informed_by_phone = validated_data.get('want_to_be_informed_by_phone', instance.want_to_be_informed_by_phone)
        instance.want_to_be_informed_by_post = validated_data.get('want_to_be_informed_by_post', instance.want_to_be_informed_by_post)
        
        instance.save()
        return instance

class PatientCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientCard
        fields = '__all__'

    
    def create(self, validated_data):
        # Bugünün tarihi
        today = datetime.today()

        # Bugüne ait tüm PatientCard kayıtlarını al
        today_patient_count = PatientCard.objects.filter(
            created_at__year=today.year,
            created_at__month=today.month,
            created_at__day=today.day
        ).count()

        # O gün için kaçıncı hasta olduğunu belirle
        new_patient_number = f"{today.strftime('%d%m%Y')}{today_patient_count + 1:02d}"

        # Patient number'ı validated_data'ya ekle
        validated_data['patient_number'] = new_patient_number

        # Yeni PatientCard kaydı oluştur
        return PatientCard.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.national_id = validated_data.get('national_id', instance.national_id)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.patient_image = validated_data.get('patient_image', instance.patient_image)
        instance.place_of_birth = validated_data.get('place_of_birth', instance.place_of_birth)
        instance.date_of_birth = validated_data.get('date_of_birth', instance.date_of_birth)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.nationality = validated_data.get('nationality', instance.nationality)
        instance.mother_name = validated_data.get('mother_name', instance.mother_name)
        instance.father_name = validated_data.get('father_name', instance.father_name)
        instance.patient_type = validated_data.get('patient_type', instance.patient_type)
        instance.insurance_info = validated_data.get('insurance_info', instance.insurance_info)
        instance.instagram_username = validated_data.get('instagram_username', instance.instagram_username)
        instance.mobile_phone1 = validated_data.get('mobile_phone1', instance.mobile_phone1)
        instance.mobile_phone2 = validated_data.get('mobile_phone2', instance.mobile_phone2)
        instance.email = validated_data.get('email', instance.email)
        instance.country = validated_data.get('country', instance.country)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.seans_number = validated_data.get('seans_number', instance.seans_number)
        instance.device_name = validated_data.get('device_name', instance.device_name)
        instance.seans_days = validated_data.get('seans_days', instance.seans_days)
        instance.education_status = validated_data.get('education_status', instance.education_status)
        instance.occupation = validated_data.get('occupation', instance.occupation)
        instance.current_employer = validated_data.get('current_employer', instance.current_employer)
        instance.marital_status = validated_data.get('marital_status', instance.marital_status)
        instance.children_count = validated_data.get('children_count', instance.children_count)
        instance.referee = validated_data.get('referee', instance.referee)
        instance.institution_type = validated_data.get('institution_type', instance.institution_type)
        instance.applied_department = validated_data.get('applied_department', instance.applied_department)
        instance.applied_operation = validated_data.get('applied_operation', instance.applied_operation)
        instance.complaints = validated_data.get('complaints', instance.complaints)
        instance.medications = validated_data.get('medications', instance.medications)
        instance.existing_conditions = validated_data.get('existing_conditions', instance.existing_conditions)
        instance.smoker = validated_data.get('smoker', instance.smoker)
        instance.past_surgeries = validated_data.get('past_surgeries', instance.past_surgeries)
        instance.allergies = validated_data.get('allergies', instance.allergies)
        instance.post_surgery_address = validated_data.get('post_surgery_address', instance.post_surgery_address)
        
        instance.save()
        return instance

class PopulationCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationCard
        fields = '__all__'

    def create(self, validated_data):
        return PopulationCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.wallet_number = validated_data.get('wallet_number', instance.wallet_number)
        instance.marital_status = validated_data.get('marital_status', instance.marital_status)
        instance.id_type = validated_data.get('id_type', instance.id_type)
        instance.passport_number = validated_data.get('passport_number', instance.passport_number)
        instance.mother_national_id = validated_data.get('mother_national_id', instance.mother_national_id)
        instance.father_national_id = validated_data.get('father_national_id', instance.father_national_id)
        instance.declaration = validated_data.get('declaration', instance.declaration)
        instance.blood_type = validated_data.get('blood_type', instance.blood_type)
        instance.registry_type = validated_data.get('registry_type', instance.registry_type)
        instance.city = validated_data.get('city', instance.city)
        instance.district = validated_data.get('district', instance.district)
        instance.neighborhood = validated_data.get('neighborhood', instance.neighborhood)
        instance.volume_number = validated_data.get('volume_number', instance.volume_number)
        instance.family_serial_number = validated_data.get('family_serial_number', instance.family_serial_number)
        instance.serial_number = validated_data.get('serial_number', instance.serial_number)
        
        instance.save()
        return instance

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'

    def create(self, validated_data):
        # Yeni Stock kaydı oluştur
        return Stock.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Mevcut Stock kaydını güncelle
        instance.stock_name = validated_data.get('stock_name', instance.stock_name)
        instance.stock_buyed = validated_data.get('stock_buyed', instance.stock_buyed)
        instance.stock_haved = validated_data.get('stock_haved', instance.stock_haved)
        instance.stock_ut = validated_data.get('stock_ut', instance.stock_ut)
        instance.stock_skt = validated_data.get('stock_skt', instance.stock_skt)
        instance.stock_wharehouse = validated_data.get('stock_wharehouse', instance.stock_wharehouse)
        instance.stock_pozition = validated_data.get('stock_pozition', instance.stock_pozition)
        instance.stcok_group = validated_data.get('stcok_group', instance.stcok_group)

        instance.save()
        return instance
