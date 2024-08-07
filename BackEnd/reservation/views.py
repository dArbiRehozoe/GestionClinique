# reservation/views.py

from rest_framework import generics , serializers , request, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny  , IsAuthenticated 
from .models import Reservation , Utilisateur
from ihmBack.serializers import ReservationSerializer , HostoriqueSerializer , UserWithReservationSerializer


class ReservationListCreateView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class ReservationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class HistoriqueAPIView(APIView):


    def get(self, request, userID):
        reserv = Reservation.objects.filter(id=userID)
        serializer = HostoriqueSerializer(reserv, many=True)

        return Response(serializer.data)
    
class UserWithReservationViewSet(viewsets.ModelViewSet):
    queryset = Utilisateur.objects.prefetch_related('reservation_set').all()
    serializer_class = UserWithReservationSerializer
     

     
    
    

