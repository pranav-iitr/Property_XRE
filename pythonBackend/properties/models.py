from django.db import models
# import user
from User.models import User
from .constants import propertyConstants
from django.core.validators import FileExtensionValidator

# Create your models here.

property_constants = propertyConstants()


class Features(models.Model):
    feature = models.CharField(max_length=100)


class Properties(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,blank=True,null=True)
    title = models.CharField(max_length=100)
    plot_no = models.CharField(max_length=20,null=True,blank=True)
    no_of_floor = models.IntegerField(default=0,null=True,blank=True)
    toatal_basement = models.IntegerField(null=True,blank=True)
    toatal_area = models.IntegerField(null=True,blank=True)
    vacant_area = models.IntegerField(null=True,blank=True)
    features = models.ManyToManyField(Features,blank=True,null=True)
    per_floor_area = models.IntegerField(null=True,blank=True)
    type = models.CharField(max_length=100,choices=property_constants.type_choices)
    power_backup = models.BooleanField(default=False)
    air_conditioned = models.BooleanField(default=False)
    state = models.CharField(max_length=100,null=True,blank=True)
    city = models.CharField(max_length=100,null=True,blank=True)
    sub_location = models.CharField(max_length=100,choices=property_constants.zone_choices)
    location = models.CharField(max_length=100,null=True,blank=True)
    photo = models.FileField(upload_to='properties/',null=True,blank=True, validators=[FileExtensionValidator(allowed_extensions=['pdf', 'png', 'dwg', 'jpg','dxf'])])
    status = models.CharField(max_length=100,default='Pending')
    maintenance_charges = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return self.title
class Floor(models.Model):
    floor_no = models.IntegerField()
    unit_available = models.IntegerField()
    total_unit = models.IntegerField()
    floor_area = models.IntegerField()
    floor_plan = models.FileField(upload_to='floor/',null=True,blank=True, validators=[FileExtensionValidator(allowed_extensions=['pdf', 'png', 'dwg', 'jpg','dxf'])])
    property = models.ForeignKey(Properties, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.floor_no}"

class Owner(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.IntegerField()
    property = models.ForeignKey(Properties, on_delete=models.CASCADE)
    spoc = models.CharField(max_length=100,default='NA')
    ownership_type = models.CharField(max_length=100,choices=property_constants.ownership_choices,null=True,blank=True)

    def __str__(self):
        return self.name

class Unit(models.Model):
    unit_no = models.IntegerField()
    property = models.ForeignKey(Properties, on_delete=models.CASCADE)
    floor = models.ForeignKey(Floor, on_delete=models.CASCADE,blank=True,null=True)
    area = models.IntegerField()
    price = models.IntegerField()
    no_of_parking = models.IntegerField()
    available_for = models.CharField(max_length=100)
    furnishng_status = models.CharField(max_length=100)
    age_of_furnishing = models.IntegerField()
    Owner = models.ForeignKey(Owner, on_delete=models.CASCADE,blank=True,null=True)
    unit_photo = models.FileField(upload_to='unit/',null=True,blank=True, validators=[FileExtensionValidator(allowed_extensions=['pdf', 'png', 'dwg', 'jpg','dxf'])])
    date_avability = models.DateField(default='2021-01-01')

    def __str__(self):
        return f"{self.unit_no}"

# class Features