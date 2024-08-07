from django.db import models
from medecin.models import Medecin
from utilisateur.models import Utilisateur
from horaireMedecin.models import HoraireMedecin

class Reservation(models.Model):
    reservationID = models.AutoField(primary_key=True)
    dateHeure = models.DateTimeField()

    matricule = models.ForeignKey(Medecin , null=True,on_delete = models.SET_NULL)
    id = models.ForeignKey(Utilisateur , null=True,on_delete = models.SET_NULL)
    HoraireMedecinID = models.ForeignKey(HoraireMedecin , null=True , on_delete = models.SET_NULL)
   
    def __str__(self):
        return f"id : {self.reservationID} par {self.id} avec le docteur {self.matricule}"
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        self.HoraireMedecinID.libre = False
        self.HoraireMedecinID.save(update_fields=['libre'])
 
        
      