from django.db import models
# import user
from django.contrib.auth.models import User

# Create your models here.

type_choices = (
    ('Commercial', 'Commercial'),
    ('Residential', 'Residential'),
    ('Industrial', 'Industrial'),
    ('Agricultural', 'Agricultural'),
    ('Other', 'Other'),
)


class Features(models.Model):
    feature = models.CharField(max_length=100)


class Properties(models.Model):
    title = models.CharField(max_length=100)
    plot_no = models.CharField(max_length=20,null=True,blank=True)
    no_of_floor = models.IntegerField()
    toatal_basement = models.IntegerField(null=True,blank=True)
    toatal_area = models.IntegerField(null=True,blank=True)
    vacant_area = models.IntegerField(null=True,blank=True)
    features = models.ManyToManyField(Features,blank=True,null=True)
    per_floor_area = models.IntegerField(null=True,blank=True)
    type = models.CharField(max_length=100,choices=type_choices)
    power_backup = models.BooleanField(default=False)
    air_conditioned = models.BooleanField(default=False)
    state = models.CharField(max_length=100,null=True,blank=True)
    city = models.CharField(max_length=100,null=True,blank=True)
    zone = models.CharField(max_length=100,default='North')
    location = models.CharField(max_length=100,null=True,blank=True)
    photo = models.ImageField(upload_to='properties/',null=True,blank=True)
    status = models.CharField(max_length=100,default='Pending')

    def __str__(self):
        return self.title
class Floor(models.Model):
    floor_no = models.IntegerField()
    unit_available = models.IntegerField()
    total_unit = models.IntegerField()
    floor_area = models.IntegerField()
    floor_plan = models.ImageField(upload_to='floor/',null=True,blank=True)
    property = models.ForeignKey(Properties, on_delete=models.CASCADE)

    def __str__(self):
        return self.floor_no

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
    

    def __str__(self):
        return self.unit_no
class Owner(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.IntegerField()
    property = models.ForeignKey(Properties, on_delete=models.CASCADE)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE,blank=True,null=True)
    cam_charges = models.IntegerField()
    vacating_area = models.IntegerField()

    def __str__(self):
        return self.name
