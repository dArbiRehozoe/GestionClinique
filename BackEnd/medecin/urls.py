# medecin/urls.py

from django.urls import path
from .views import MedecinListCreateView , MedecinRetrieveUpdateDestroyView , GradeListCreateView , GradeRetrieveUpdateDestroyView , SpecialisteListCreateView , SpecialisteRetrieveUpdateDestroyView  , SGListCreateView , PhotoMedecinAPIView

urlpatterns = [
  
    path('medecin/', MedecinListCreateView.as_view(), name='medecin-list-create'),
    path('medecin/<str:pk>/', MedecinRetrieveUpdateDestroyView.as_view(), name='medecin-detail'),

    path('grade/', GradeListCreateView.as_view(), name='grade-list-create'),
    path('grade/<int:pk>/', GradeRetrieveUpdateDestroyView.as_view(), name='grade-detail'),

    path('specialiste/', SpecialisteListCreateView.as_view(), name='specialiste-list-create'),
    path('specialiste/<int:pk>/', SpecialisteRetrieveUpdateDestroyView.as_view(), name='specialiste-detail'),


    path('DocteurStatus/', SGListCreateView.as_view(), name='DocteurStatus'),


    path('PhotoUpdate/<str:pk>/', PhotoMedecinAPIView.as_view(), name='PhotoUpdate'),
]
