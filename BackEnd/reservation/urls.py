# reservation/urls.py

from django.urls import path
from .views import ReservationListCreateView , ReservationRetrieveUpdateDestroyView , HistoriqueAPIView , UserWithReservationViewSet

urlpatterns = [
 
    path('reservation/', ReservationListCreateView.as_view(), name='reservation-list-create'),
    path('reservation/<int:pk>/', ReservationRetrieveUpdateDestroyView.as_view(), name='reservation-detail'),

    path('historique/<int:userID>/', HistoriqueAPIView.as_view(), name='historique'),

    path('visite-list/', UserWithReservationViewSet.as_view({'get': 'list'}), name='visite-list'),
    path('visite-list/<int:pk>/', UserWithReservationViewSet.as_view({'get': 'retrieve'}), name='visite-list-user'),

]
