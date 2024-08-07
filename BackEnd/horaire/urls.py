# horaire/urls.py

from django.urls import path
from .views import HoraireListCreateView , HoraireRetrieveUpdateDestroyView

urlpatterns = [
    # horaire URLs
    path('horaire/', HoraireListCreateView.as_view(), name='horaire-list-create'),
    path('horaire/<int:pk>/', HoraireRetrieveUpdateDestroyView.as_view(), name='horaire-detail'),

]
