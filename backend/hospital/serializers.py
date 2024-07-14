from rest_framework import serializers
from hospital.models import Item, Note, PatientCard, CommunicationCard, PopulationCard
from django.db.models import Max, Count

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

    def create(self, validated_data):
        return Item.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
       
        instance.save()
        return instance

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
        return PatientCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.patient_number = validated_data.get('patient_number', instance.patient_number)
        instance.file_number = validated_data.get('file_number', instance.file_number)
        instance.national_id = validated_data.get('national_id', instance.national_id)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.place_of_birth = validated_data.get('place_of_birth', instance.place_of_birth)
        instance.date_of_birth = validated_data.get('date_of_birth', instance.date_of_birth)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.nationality = validated_data.get('nationality', instance.nationality)
        instance.mother_name = validated_data.get('mother_name', instance.mother_name)
        instance.father_name = validated_data.get('father_name', instance.father_name)
        instance.patient_type = validated_data.get('patient_type', instance.patient_type)
        instance.kinship_type = validated_data.get('kinship_type', instance.kinship_type)
        instance.insurance_info = validated_data.get('insurance_info', instance.insurance_info)
        instance.insured_information = validated_data.get('insured_information', instance.insured_information)
        instance.complementary_insurance_info = validated_data.get('complementary_insurance_info', instance.complementary_insurance_info)
        instance.referring_info = validated_data.get('referring_info', instance.referring_info)
        instance.is_foreign_patient = validated_data.get('is_foreign_patient', instance.is_foreign_patient)
        instance.is_vip = validated_data.get('is_vip', instance.is_vip)
        
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