
from rest_framework import serializers

from .models import Properties,Unit,Floor,Features,Owner

class PropertiesListSerializer(serializers.ModelSerializer):
    
    
    occupied_area = serializers.SerializerMethodField()

    class Meta:

        model = Properties
        fields = ("id","title","type","location","occupied_area","toatal_area","status")
    
    def get_occupied_area(self, obj):
        return obj.toatal_area - obj.vacant_area
class unitListSerializer(serializers.ModelSerializer):

    title = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()
    toatal_area = serializers.SerializerMethodField()
    occupied_area = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    type = serializers.SerializerMethodField()

    class Meta:
        model = Unit
        fields = ("id","title","location","toatal_area","occupied_area","status","type")
    def get_title(self, obj):
        return obj.property.title
    def get_location(self, obj):
        return obj.property.location
    def get_toatal_area(self, obj):
        return obj.area
    def get_occupied_area(self, obj):
        return 0
    def get_status(self, obj):
        return obj.property.status
    def get_type(self, obj):
        return obj.property.type
        
class PropertiesCreateUpdateSerilizer(serializers.Serializer):
    title = serializers.CharField()
    type = serializers.CharField()
    location = serializers.CharField()
    toatal_area = serializers.IntegerField()
    vacant_area = serializers.IntegerField()
    no_of_floor = serializers.IntegerField()
    toatal_basement = serializers.IntegerField()
    per_floor_area = serializers.IntegerField()
    power_backup = serializers.BooleanField()
    air_conditioned = serializers.BooleanField()
    toatal_basement = serializers.IntegerField()
    state = serializers.CharField()
    city = serializers.CharField()
    sub_location = serializers.CharField()
    photo = serializers.ImageField()
    location = serializers.CharField()
    status = serializers.CharField()
    

    def create(self, validated_data):
        return Properties.objects.create(**validated_data)
    class Meta:
        model = Properties
        fields = "__all__"

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = "__all__"
class FloorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Floor
        fields = "__all__"
class OwnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Owner
        fields = "__all__"

class OwnerDisplaySerializer(serializers.ModelSerializer):

    property = serializers.SerializerMethodField()
    property_id = serializers.SerializerMethodField()



    class Meta:
        model = Owner
        fields = "__all__"
        
    def get_property(self, obj):
        return obj.property.title
    
    def get_property_id(self, obj):
        return obj.property.id

class unitDisplaySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Unit
        fields = "__all__"