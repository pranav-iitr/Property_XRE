from django.contrib import admin

from datetime import datetime
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.views.generic.detail import DetailView
from django.urls import path, reverse
from django.utils.html import format_html
import matplotlib.pyplot as plt


from User.models import User
admin.site.register(User)