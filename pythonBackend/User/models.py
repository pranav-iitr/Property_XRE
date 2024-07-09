from django.db import models

from django.contrib.auth.models import AbstractUser


from django.utils.translation import gettext_lazy as _
from User.manager import UserManager

class User(AbstractUser):

    
    name = models.CharField(max_length=20,default="")

    phone_no = models.CharField(max_length=10, blank=True,unique=True)
    email = models.EmailField(_('email'), max_length=80, unique=True)
    rating = models.PositiveIntegerField(default=800)
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
    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

