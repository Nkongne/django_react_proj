from django.db import models

# Create your models here.
class Student(models.Model):
    nom=models.CharField(max_length=30)
    tel=models.CharField("numero telephone",max_length=30)
    email=models.EmailField()
    dateInscription=models.DateField("Date inscription",auto_now_add=True)
