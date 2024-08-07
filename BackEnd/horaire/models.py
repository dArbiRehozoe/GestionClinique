from django.db import models
from medecin.models import Medecin

class Horaire(models.Model):
    horaireID = models.AutoField(primary_key=True)
    debut = models.DateTimeField(null=True )
    fin = models.DateTimeField(null=True )

   
    def __str__(self):
        return f"{self.debut}-{self.fin}"