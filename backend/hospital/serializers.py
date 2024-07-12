from rest_framework import serializers
from hospital.models import Item, Note
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