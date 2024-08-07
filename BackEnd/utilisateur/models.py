
from django.db import models
from django.contrib.auth.models import AbstractUser , Group , Permission , BaseUserManager , AbstractBaseUser , PermissionsMixin
    
class AccountManager(BaseUserManager):
    def create_user(self, username, password, **extra_fields):
        if not username or not password:
            raise ValueError('Data incompleted')
        username = self.model.normalize_username(username)
        
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, password, **extra_fields)

class Utilisateur(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(max_length=254, blank=True)
    
    contact = models.CharField(max_length=30, blank=True)
    UserPhoto = models.ImageField(upload_to='patient_photos/', null=True, blank=True) 

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    groups = models.ManyToManyField(Group, related_name='accounts')
    user_permissions = models.ManyToManyField(Permission, related_name='accounts')

    objects = AccountManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []
   
    def __str__(self):
        return f"{self.username} - {self.email}"