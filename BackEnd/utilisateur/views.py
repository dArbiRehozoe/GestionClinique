# utilisateurs/views.py
import os
from rest_framework import generics, viewsets , status
from django.contrib.auth.hashers import check_password
from .models import Utilisateur
from ihmBack.serializers import UtilisateurSerializer , ChangePasswordSerializer , PhotoUpdateSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny , IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication , SessionAuthentication , BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.core.files.storage import default_storage
from rest_framework.exceptions import PermissionDenied
from rest_framework import permissions, status


class UtilisateurListCreateView(generics.ListCreateAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class UtilisateurRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = [AllowAny]

class UserDetailsAPIView(APIView):
    authentication_classes = [ JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UtilisateurSerializer(user)  
        return Response(serializer.data)
    
class ChangePasswordViewSet(viewsets.ViewSet):
    authentication_classes = [ JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def change_password(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = request.user
        old_password = serializer.validated_data['old_password']
        new_password = serializer.validated_data['new_password']
        #confirm_password = serializer.validated_data['confirm_password']

        # Check if old password matches
        if not check_password(old_password, user.password):
            return Response({'error': 'Invalid old password'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if new password matches the confirmation
        #if new_password != confirm_password:
            #return Response({'error': 'New password and confirm password do not match'}, status=status.HTTP_400_BAD_REQUEST)

        # Set the new password
        user.set_password(new_password)
        user.save()

        return Response({'success': 'Password changed successfully'}, status=status.HTTP_200_OK)


class PhotoUpdateAPIView(APIView):
    def patch(self, request, *args, **kwargs):
        user = self.request.user
        serializer = PhotoUpdateSerializer(user, data=request.data)
        if serializer.is_valid():
            # Save the photo to the appropriate location
            photo = serializer.validated_data.get('UserPhoto')
            if photo:
                file_path = default_storage.save(os.path.join('patient_photos', photo.name), photo)
                user.UserPhoto = file_path
                user.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response("No photo provided", status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PromoteUserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request, id):
   
        if not request.user.is_staff or not request.user.is_superuser:
            raise PermissionDenied("You do not have permission to perform this action.")

        try:
            user = Utilisateur.objects.get(id=id)
        except Utilisateur.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

   
        if 'is_staff' in request.data:
            is_staff = request.data.get('is_staff')

        
            if isinstance(is_staff, bool):
                user.is_staff = is_staff
                user.save()
                return Response(UtilisateurSerializer(user).data, status=status.HTTP_200_OK)
            elif isinstance(is_staff, str):
                if is_staff.lower() in ['true', '1']:
                    user.is_staff = True
                elif is_staff.lower() in ['false', '0']:
                    user.is_staff = False
                else:
                    return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)
                user.save()
                return Response(UtilisateurSerializer(user).data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "is_staff field is required"}, status=status.HTTP_400_BAD_REQUEST)