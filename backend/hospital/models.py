from django.db import models
from django.forms import ValidationError

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
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