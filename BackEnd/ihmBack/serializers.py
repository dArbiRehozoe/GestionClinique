# poste/serializers.py
import os
from rest_framework import serializers
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist
from horaire.models import Horaire
from medecin.models import Medecin , Grade , Specialization
from utilisateur.models import Utilisateur
from reservation.models import Reservation
from horaireMedecin.models import HoraireMedecin

class GradeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grade
        fields = '__all__'

class SpelialiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Specialization
        fields = '__all__'

class GradeNameSerial(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['nomGrade']

class SpeciNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = ['specialite']




class MedecinSerializer(serializers.ModelSerializer):
    #grade = serializers.SerializerMethodField()
    #specialization = serializers.SerializerMethodField()
    grade = serializers.SlugRelatedField(slug_field='nomGrade', queryset=Grade.objects.all(), allow_null=False)

    specialization = serializers.SlugRelatedField(slug_field='specialite', queryset=Specialization.objects.all(), allow_null=True)

    class Meta:
        model = Medecin
        fields = ['matricule', 'nom', 'mail', 'cabinet', 'Photo', 'tarif', 'grade', 'specialization']
        extra_kwargs = {'Photo': {'required': False}}

    def get_specialization(self, obj):
        return obj.specialization.specialite if obj.specialization else None
    
    def get_grade(self, obj):
        return obj.grade.nomGrade if obj.grade else None



class HoraireSerializer(serializers.ModelSerializer):

    class Meta:
        model = Horaire
        fields = '__all__'

    def validate(self, data):
        # Check if debut and fin together already exist in the database
        debut = data.get('debut')
        fin = data.get('fin')
        if debut is not None and fin is not None:
            existing_horaire = Horaire.objects.filter(debut=debut, fin=fin).exists()
            if existing_horaire:
                raise serializers.ValidationError("Horaire with this debut and fin already exists.")
        return data


class UtilisateurSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True , required=False)

    class Meta:
        model = Utilisateur
        fields = ['id', 'username', 'email' , 'contact' , 'password' , 'UserPhoto' , 'is_staff']
        extra_kwargs = {'UserPhoto': {'required': False}}


    def create(self, validated_data):
        password = validated_data.pop('password')
        account = Utilisateur.objects.create(**validated_data)
        account.set_password(password)
        account.save()
        return account

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        UserPhoto = validated_data.pop('UserPhoto', None)
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password is not None:
            instance.set_password(password)
        if UserPhoto is not None:
            instance.UserPhoto = UserPhoto
        instance.save()
        return instance
    
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class HoraireMedecinSerializer(serializers.ModelSerializer):
    horaire = HoraireSerializer(source='horaireID', read_only=True)
    medecin = MedecinSerializer(source='matricule', read_only=True)
    

    class Meta:
        model = HoraireMedecin
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    utilisateur = UtilisateurSerializer(source='id', read_only=True)
    medecin = MedecinSerializer(source='matricule', read_only=True)
    horaireMedecin = HoraireMedecinSerializer(source='HoraireMedecinID' , read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'

class HostoriqueSerializer(serializers.ModelSerializer):

    doctor_name = serializers.CharField(source='matricule.nom')
    image_doc = serializers.CharField(source='matricule.Photo')
    dateHeure = serializers.DateTimeField()
    gradeDoc = serializers.CharField(source='matricule.grade')
    cabinet = serializers.CharField(source='matricule.cabinet')
    

    class Meta:
        model = Reservation
        fields = ['doctor_name', 'image_doc', 'dateHeure' , 'gradeDoc' , 'cabinet']

class UserWithReservationSerializer(serializers.ModelSerializer):
    most_recent_reservation = serializers.SerializerMethodField()

    class Meta:
        model = Utilisateur
        fields = ['id', 'username', 'email',  'contact', 'UserPhoto', 'is_staff' ,'most_recent_reservation']

    def get_most_recent_reservation(self, obj):
        try:
            most_recent_reservation = obj.reservation_set.latest('dateHeure').dateHeure
        except ObjectDoesNotExist:
            most_recent_reservation = None
        return most_recent_reservation
    


class PhotoUpdateSerializer(serializers.ModelSerializer):
    UserPhoto = serializers.ImageField(required=False)

    class Meta:
        model = Utilisateur
        fields = ['UserPhoto']

class PhotoMedecinSerializer(serializers.ModelSerializer):
    Photo = serializers.ImageField(required=True)

    class Meta:
        model = Medecin
        fields = ['Photo']









    













      