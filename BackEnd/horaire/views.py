# horaire/views.py

from rest_framework import generics
from .models import Horaire
from ihmBack.serializers import HoraireSerializer

# horaire views
class HoraireListCreateView(generics.ListCreateAPIView):
    queryset = Horaire.objects.all()
    serializer_class = HoraireSerializer

class HoraireRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Horaire.objects.all()
    serializer_class = HoraireSerializer