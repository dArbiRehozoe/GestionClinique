# horaireMedecin/views.py

from django.db.models import Q
from rest_framework import generics , status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import HoraireMedecin 
from reservation.models import Reservation
from utilisateur.models import Utilisateur
from medecin.models import Medecin , Specialization , Grade
from ihmBack.serializers import HoraireMedecinSerializer , HoraireSerializer 
from datetime import datetime
import json


class HoraireMedecinListCreateView(generics.ListCreateAPIView):
    queryset = HoraireMedecin.objects.all()
    serializer_class = HoraireMedecinSerializer

class HoraireMedecinRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HoraireMedecin.objects.all()
    serializer_class = HoraireMedecinSerializer

class Horaire_AND_HMCreateView(APIView):
    def post(self, request, format=None):
        debut = request.data.get('debut')
        fin = request.data.get('fin')
        matricule = request.data.get('matricule')
        libre = request.data.get('libre')

        # Create a new entry in the Horaire table
        horaire_serializer = HoraireSerializer(data={'debut': debut, 'fin': fin})
        if horaire_serializer.is_valid():
            horaire = horaire_serializer.save()

            # Create a new entry in the HoraireMedecin table
            horaire_medecin_serializer = HoraireMedecinSerializer(data={'horaireID': horaire.pk, 'libre': libre , 'matricule': matricule})
            if horaire_medecin_serializer.is_valid():
                horaire_medecin_serializer.save()
                return Response(horaire_medecin_serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(horaire_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

def get_data_for_medecin_between_dates(medecin_matricule ):

    horaire_medecin_objects = HoraireMedecin.objects.filter(
        matricule__matricule=medecin_matricule
    )

    reservation_objects = Reservation.objects.filter(
        matricule__matricule=medecin_matricule
    )

    return horaire_medecin_objects, reservation_objects

class GetDataForMedecinBetweenDates(APIView):
    def post(self, request):
        data = request.data
        medecin_matricule = data.get('medecin_matricule')
        #start_date = datetime.strptime(data.get('start_date'), '%Y-%m-%dT%H:%M:%SZ')
        #end_date = datetime.strptime(data.get('end_date'), '%Y-%m-%dT%H:%M:%SZ')

        horaire_medecin_objects, reservation_objects = get_data_for_medecin_between_dates(medecin_matricule)

        result = []
        for horaire_medecin in horaire_medecin_objects:
            data = {
                "matricule": medecin_matricule,
                "horaire_medecin_id": horaire_medecin.HoraireMedecinID,
                "debut": horaire_medecin.horaireID.debut,
                "fin": horaire_medecin.horaireID.fin,
                "libre": horaire_medecin.libre,
                "reservations": []
            }

            if not horaire_medecin.libre:
                for reservation in reservation_objects:
                    if (reservation.dateHeure >= horaire_medecin.horaireID.debut and
                            reservation.dateHeure <= horaire_medecin.horaireID.fin and
                            reservation.HoraireMedecinID == horaire_medecin): 
                        data["reservations"].append(reservation.id.username)
            result.append(data)



        return Response(result)
    

def get_medecin_datas_dispo(specialization):
    medecin_objects = []

    if specialization:
        try:
        
            specialization_object = Specialization.objects.get(specialite=specialization)
            medecin_matricules = Medecin.objects.filter(specialization=specialization_object)
            medecin_objects = HoraireMedecin.objects.filter(matricule__in=medecin_matricules)
        except Specialization.DoesNotExist:
            try:
           
                grade_object = Grade.objects.get(nomGrade=specialization)
                medecin_matricules = Medecin.objects.filter(grade=grade_object)
                medecin_objects = HoraireMedecin.objects.filter(matricule__in=medecin_matricules)
            except Grade.DoesNotExist:
                return []

    return medecin_objects



class get_dispo(APIView):
    def post(self, request):
        data = request.data
        specialization = data.get('specialization')
        ref_date = datetime.strptime(data.get('ref_date'), '%Y-%m-%dT%H:%M:%SZ')

        base_url = "http://localhost:2000/"

        medecin_object = get_medecin_datas_dispo(specialization)

        result = {}
        for medecins in medecin_object:
            if medecins.libre == True and medecins.horaireID.debut.year == ref_date.year and medecins.horaireID.debut.month == ref_date.month and medecins.horaireID.debut.day == ref_date.day:
                if medecins.matricule.matricule not in result:
                    result[medecins.matricule.matricule] = {
                        "matricule": medecins.matricule.matricule,
                        "nom": medecins.matricule.nom,
                        "mail": medecins.matricule.mail,
                        "Photo": f"{base_url}{medecins.matricule.Photo}",
                        "tarif": medecins.matricule.tarif,
                        "cabinet" : medecins.matricule.cabinet,
                        "grade": medecins.matricule.grade.nomGrade,
                        "specialization": medecins.matricule.specialization.specialite,
                        "horaireMedecinID": [],
                        "disponibility": []
                    }
                result[medecins.matricule.matricule]["horaireMedecinID"].append(medecins.HoraireMedecinID)
                result[medecins.matricule.matricule]["disponibility"].append(f"{medecins.horaireID.debut.hour}:{str(medecins.horaireID.debut.minute).zfill(2)}")

     
        result_list = list(result.values())

        return Response(result_list)
    

    


