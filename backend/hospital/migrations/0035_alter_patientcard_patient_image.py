# Generated by Django 5.0.6 on 2024-12-16 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0034_alter_taskcheck_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patientcard',
            name='patient_image',
            field=models.FileField(upload_to='images/patient_images/'),
        ),
    ]
