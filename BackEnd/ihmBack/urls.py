from django.contrib import admin
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('horaire/' , include('horaire.urls')),
    path('account/' , include('utilisateur.urls')),    
    path('medecin/' , include('medecin.urls')),
    path('reservation/' , include('reservation.urls')),    
    path('travail/' , include('horaireMedecin.urls')),  

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
