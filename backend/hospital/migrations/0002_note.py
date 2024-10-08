# Generated by Django 5.0.6 on 2024-07-06 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(max_length=255, verbose_name='Note')),
                ('date', models.DateField(verbose_name='Date')),
                ('start_clock', models.TimeField(verbose_name='Start Time')),
                ('finish_clock', models.TimeField(verbose_name='Finish Time')),
            ],
            options={
                'verbose_name': 'Not',
                'verbose_name_plural': 'Notlar',
                'ordering': ['date', 'start_clock'],
                'indexes': [models.Index(fields=['date'], name='hospital_no_date_bdd482_idx')],
            },
        ),
    ]
