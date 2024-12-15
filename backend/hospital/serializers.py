from rest_framework import serializers
from hospital.models import  Note, PatientCard, CommunicationCard, PatientFiles, PatientPhoto, Poll, PopulationCard, Stock, Order, TaskCheck, WareHouse, Worker, TaskAssignment, Leave, WorkerFile, WorkingHours, PatientNote
from django.db.models import Max, Count
from datetime import datetime

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

    def create(self, validated_data):
        return Note.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class CommunicationCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunicationCard
        fields = '__all__'

    def create(self, validated_data):
        return CommunicationCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class PatientPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientPhoto
        fields = '__all__'


    def create(self, validated_data):
        """
        Yeni bir izin kaydı oluşturur.
        """
        leave = PatientPhoto.objects.create(**validated_data)
        return leave

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class PatientFilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientFiles
        fields = '__all__'


    def create(self, validated_data):
        """
        Yeni bir izin kaydı oluşturur.
        """
        leave = PatientFiles.objects.create(**validated_data)
        return leave

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poll
        fields = '__all__'


    def create(self, validated_data):
        """
        Yeni bir izin kaydı oluşturur.
        """
        leave = Poll.objects.create(**validated_data)
        return leave

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class PatientNoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = PatientNote
        fields = '__all__'


    def create(self, validated_data):
     
        return PatientNote.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Var olan bir Worker nesnesini güncellemek için özelleştirilmiş metot.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class PatientCardSerializer(serializers.ModelSerializer):
    patient_note = PatientNoteSerializer(many=True, read_only=True)
    patient_poll = PollSerializer(many=True, read_only=True)
    patient_photos = PatientPhotoSerializer(many=True, read_only=True)
    patient_files = PatientFilesSerializer(many=True, read_only=True)

    patient_image = serializers.ImageField(
        max_length=None, use_url=True,
        )
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
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class PopulationCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationCard
        fields = '__all__'

    def create(self, validated_data):
        return PopulationCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
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
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        # Yeni Stock kaydı oluştur
        return Order.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Var olan bir Worker nesnesini güncellemek için özelleştirilmiş metot.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class WorkerFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerFile
        fields = '__all__'


    def create(self, validated_data):
        """
        Yeni bir izin kaydı oluşturur.
        """
        leave = WorkerFile.objects.create(**validated_data)
        return leave

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class TaskCheckSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TaskCheck
        fields = '__all__'

    def create(self, validated_data):
        """
        Yeni bir Worker nesnesi oluşturmak için özelleştirilmiş metot.
        """
        wh = TaskCheck.objects.create(**validated_data)
        return wh

    def update(self, instance, validated_data):
        """
        Var olan bir Worker nesnesini güncellemek için özelleştirilmiş metot.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class TaskAssignmentSerializer(serializers.ModelSerializer):
    task_checks = serializers.SerializerMethodField()
    class Meta:
        model = TaskAssignment
        fields = '__all__'

    def get_task_checks(self, obj):
        """
        TaskCheck ilişkisini belirli bir alana göre sıralı döndürmek için özelleştirilmiş metot.
        """
        task_checks = obj.task_checks.all().order_by('-date')  # `related_name` ile erişim
        return TaskCheckSerializer(task_checks, many=True).data
    
    def create(self, validated_data):
        """
        Yeni bir görev atama oluşturulurken çalışacak özelleştirilmiş metot.
        """
        # Örnek: Başlangıç saati ile bitiş saati arasındaki farkı kontrol et
        start_time = validated_data.get('start_time')
        end_time = validated_data.get('end_time')

        if start_time and end_time and start_time >= end_time:
            raise serializers.ValidationError("Bitiş saati, başlangıç saatinden önce olamaz.")

        # Yeni bir görev atama oluştur ve kaydet
        task_assignment = TaskAssignment.objects.create(**validated_data)
        return task_assignment

    def update(self, instance, validated_data):
        """
        Mevcut bir görev atamasını güncelleme metodu.
        """
        # Örnek: Başlangıç saati ile bitiş saati arasındaki farkı kontrol et
        start_time = validated_data.get('start_time', instance.start_time)
        end_time = validated_data.get('end_time', instance.end_time)

        if start_time and end_time and start_time >= end_time:
            raise serializers.ValidationError("Bitiş saati, başlangıç saatinden önce olamaz.")

        # Diğer alanları güncelle
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        # Güncellenmiş nesneyi kaydet
        instance.save()
        return instance

class WorkingHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkingHours
        fields = '__all__'

    def create(self, validated_data):
        """
        Yeni bir çalışma saati oluşturulurken çalışacak özelleştirilmiş metot.
        """
        # Haftalık çalışma saati hesaplamak için işbaşı ve paydos saatlerini kontrol et
        start_time = validated_data.get('start_time')
        end_time = validated_data.get('end_time')
        weekly_hours = validated_data.get('weekly_hours')

        if start_time and end_time and weekly_hours==None:
            # Örnek: Haftalık çalışma saati hesaplaması yapılabilir
            weekly_hours = (end_time.hour - start_time.hour) * 5  # Basit bir hesaplama (örneğin günde 8 saat)
            validated_data['weekly_hours'] = weekly_hours

        working_hours = WorkingHours.objects.create(**validated_data)
        return working_hours

    def update(self, instance, validated_data):
        """
        Mevcut çalışma saati kaydını güncelleme metodu.
        """
        # Haftalık çalışma saati güncellemesi
        start_time = validated_data.get('start_time', instance.start_time)
        end_time = validated_data.get('end_time', instance.end_time)

        if start_time and end_time and weekly_hours==None:
            weekly_hours = (end_time.hour - start_time.hour) * 5  # Haftalık saat hesaplama
            validated_data['weekly_hours'] = weekly_hours

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance

class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leave
        fields = '__all__'

    def validate(self, data):
        """
        İzin tarihlerini kontrol eder.
        """
        start_date = data.get('start_date')
        end_date = data.get('end_date')

        if start_date and end_date and start_date > end_date:
            raise serializers.ValidationError("İzin bitiş tarihi, başlangıç tarihinden önce olamaz.")

        return data

    def create(self, validated_data):
        """
        Yeni bir izin kaydı oluşturur.
        """
        leave = Leave.objects.create(**validated_data)
        return leave

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class WorkerFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerFile
        fields = '__all__'


    def create(self, validated_data):
        """
        Yeni bir izin kaydı oluşturur.
        """
        leave = WorkerFile.objects.create(**validated_data)
        return leave

    def update(self, instance, validated_data):
        """
        Mevcut bir izin kaydını günceller.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class WorkerSerializer(serializers.ModelSerializer):
    worker_files = WorkerFileSerializer(many=True, read_only=True)
    working_hours = serializers.SerializerMethodField()
    leaves = serializers.SerializerMethodField()
    task_assignments = serializers.SerializerMethodField()

    class Meta:
        model = Worker
        fields = '__all__'
    
    def get_task_assignments(self, obj):
        """
        TaskCheck ilişkisini belirli bir alana göre sıralı döndürmek için özelleştirilmiş metot.
        """
        task_assignments = obj.task_assignments.all().order_by('-end_time')  # `related_name` ile erişim
        return TaskAssignmentSerializer(task_assignments, many=True).data

    def get_working_hours(self, obj):
        """
        Working hours'ı testten başa doğru sıralar (en eski başta).
        """
        working_hours = obj.working_hours.all().order_by('-id')  # 'test_field' yerine sıralama kriterinizi yazın
        return WorkingHoursSerializer(working_hours, many=True).data

    def get_leaves(self, obj):
        """
        Leaves'ı testten başa doğru sıralar (en eski başta).
        """
        leaves = obj.leaves.all().order_by('-start_date')  # start_date'e göre sıralar
        return LeaveSerializer(leaves, many=True).data

    def create(self, validated_data):
        """
        Yeni bir Worker nesnesi oluşturmak için özelleştirilmiş metot.
        """
        worker = Worker.objects.create(**validated_data)
        return worker

    def update(self, instance, validated_data):
        """
        Var olan bir Worker nesnesini güncellemek için özelleştirilmiş metot.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    
class WareHouseSerializer(serializers.ModelSerializer):
    wh_stocks = StockSerializer(many=True, read_only=True)

    wh_orders = OrderSerializer(many=True, read_only=True)

    class Meta:
        model = WareHouse
        fields = '__all__'

    def create(self, validated_data):
        """
        Yeni bir Worker nesnesi oluşturmak için özelleştirilmiş metot.
        """
        wh = WareHouse.objects.create(**validated_data)
        return wh

    def update(self, instance, validated_data):
        """
        Var olan bir Worker nesnesini güncellemek için özelleştirilmiş metot.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance