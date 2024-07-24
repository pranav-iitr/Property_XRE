from django.db import models

from django.contrib.auth.models import AbstractUser

from random import randint
from django.utils.translation import gettext_lazy as _
from User.manager import UserManager

class User(AbstractUser):

    
    name = models.CharField(max_length=20,default="")

    
    email = models.EmailField(_('email'), max_length=80, unique=True)
    
    otp = models.CharField(max_length=6, blank=True)
    username = None
    # Field for login
    USERNAME_FIELD = 'email'
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)    
    updated_at = models.DateTimeField(auto_now=True)

    # Field for command createsuperuser
    REQUIRED_FIELDS = ['name',]
    objects = UserManager()
    def __str__(self):
        return f"{self.email}"
    
    def set_otp(self):
        self.otp = randint(100000, 999999)
        self.save()
        return self.otp

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

