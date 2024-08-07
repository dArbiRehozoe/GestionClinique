from django.db import models

class Grade(models.Model):
    nomGrade = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.nomGrade

class Specialization(models.Model):
    specialite = models.CharField(max_length=100 , unique = True)

    def __str__(self):
        return self.specialite

class Medecin(models.Model):
    matricule = models.CharField(primary_key=True , max_length = 50)
    nom = models.CharField(max_length = 25)
    #prenom = models.CharField(max_length = 25)
    mail = models.EmailField(max_length=254, blank=True)
    cabinet = models.CharField(max_length = 25)
    Photo = models.ImageField(upload_to='medecin_photos/', null=False, default=None, blank=True) 
    tarif = models.IntegerField(null=True)
    grade = models.ForeignKey(Grade, on_delete=models.SET_NULL , null=True)
    specialization = models.ForeignKey(Specialization, on_delete=models.SET_NULL, blank=True, null=True)   


    def __str__(self):
        return f"{self.matricule} - {self.nom} - {self.grade} - {self.specialization} - {self.tarif}"