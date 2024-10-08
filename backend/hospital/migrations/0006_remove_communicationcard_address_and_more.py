# Generated by Django 5.0.6 on 2024-08-25 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0005_communicationcard_populationcard'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='communicationcard',
            name='address',
        ),
        migrations.RemoveField(
            model_name='communicationcard',
            name='city',
        ),
        migrations.RemoveField(
            model_name='communicationcard',
            name='country',
        ),
        migrations.RemoveField(
            model_name='communicationcard',
            name='email',
        ),
        migrations.RemoveField(
            model_name='communicationcard',
            name='mobile_phone1',
        ),
        migrations.RemoveField(
            model_name='communicationcard',
            name='mobile_phone2',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='complementary_insurance_info',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='file_number',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='insured_information',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='is_foreign_patient',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='is_vip',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='kinship_type',
        ),
        migrations.RemoveField(
            model_name='patientcard',
            name='referring_info',
        ),
        migrations.AddField(
            model_name='patientcard',
            name='address',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='allergies',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='applied_department',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='applied_operation',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='children_count',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='city',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='complaints',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='country',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='current_employer',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='device_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='education_status',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='existing_conditions',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='instagram_username',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='institution_type',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='marital_status',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='medications',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='mobile_phone1',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='mobile_phone2',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='occupation',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='past_surgeries',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='patient_image',
            field=models.ImageField(default=1, upload_to='images/patient_images/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='patientcard',
            name='post_surgery_address',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='referee',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='seans_days',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='seans_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patientcard',
            name='smoker',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='patientcard',
            name='insurance_info',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
    ]
