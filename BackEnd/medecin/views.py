# medecin/views.py
import os
from rest_framework.permissions import IsAdminUser 
from django.http import JsonResponse
from django.views import View
from rest_framework import generics , status , viewsets
from rest_framework.permissions import AllowAny , IsAuthenticated
from datetime import datetime
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.files.storage import default_storage
from .models import Medecin , Grade , Specialization
from ihmBack.serializers import MedecinSerializer , GradeSerializer , SpelialiteSerializer , PhotoMedecinSerializer

class GradeListCreateView(generics.ListCreateAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer

class GradeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer

class SpecialisteListCreateView(generics.ListCreateAPIView):
    queryset = Specialization.objects.all()
    serializer_class = SpelialiteSerializer

class SpecialisteRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Specialization.objects.all()
    serializer_class = SpelialiteSerializer

class MedecinListCreateView(generics.ListCreateAPIView):
    queryset = Medecin.objects.all()
    serializer_class = MedecinSerializer

class MedecinRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medecin.objects.all()
    serializer_class = MedecinSerializer

class SGListCreateView(generics.ListAPIView):
    queryset = Specialization.objects.all()
    serializer_class = SpelialiteSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        
   
        new_specialization = {'id': response.data[-1]['id'] + 2, 'specialite': 'Generaliste'}

        response.data.append(new_specialization)
        
        return response
    


class PhotoMedecinAPIView(APIView):
    permission_classes = [IsAdminUser]  # Ensure user is admin

    def patch(self, request, *args, **kwargs):
        user = self.request.user

        # Check if the user is authenticated as an admin
        if user.is_authenticated and user.is_staff:
            serializer = PhotoMedecinSerializer(user, data=request.data)
            if serializer.is_valid():
                # Save the photo to the appropriate location
                photo = serializer.validated_data.get('Photo')
                if photo:
                    file_path = default_storage.save(os.path.join('medecin_photos', photo.name), photo)
                    user.Photo = file_path
                    user.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response("No photo provided", status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("User is not authorized", status=status.HTTP_403_FORBIDDEN)

    