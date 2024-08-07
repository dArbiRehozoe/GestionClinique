from django.db import models
from medecin.models import Medecin
from horaire.models import Horaire

class HoraireMedecin(models.Model):
    HoraireMedecinID = models.AutoField(primary_key=True)
    libre = models.BooleanField(default=True )
    matricule = models.ForeignKey(Medecin , null=True,on_delete = models.SET_NULL)
    horaireID = models.ForeignKey(Horaire , null=True,on_delete = models.SET_NULL)

   
    def __str__(self):
        return f"id : {self.HoraireMedecinID} du {self.horaireID} avec le docteur {self.matricule} - {self.libre}"