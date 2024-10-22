

from .models import Properties,Unit,Floor,Features,Owner
from .constants import propertyConstants
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PropertiesListSerializer , PropertiesCreateUpdateSerilizer,UnitSerializer,FloorSerializer,OwnerSerializer,unitListSerializer,OwnerDisplaySerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Count
property_constants = propertyConstants()

def create_filter_kwargs(params):
    filter_kwargs = {}

    if 'type' in params:
        filter_kwargs['type'] = params['type']
    
    min_price = params.get('min_price')
    max_price = params.get('max_price')
    min_value = params.get('min_value')
    max_value = params.get('max_value')
    
    if min_value is not None:
        filter_kwargs['unit__price__gte'] = min_value
    elif min_price is not None:
        filter_kwargs['unit__price__gte'] = min_price
    
    if max_value is not None:
        filter_kwargs['unit__price__lte'] = max_value
    elif max_price is not None:
        filter_kwargs['unit__price__lte'] = max_price
    
    if 'city' in params:
        filter_kwargs['city'] = params['city']
    
    if 'sub_location' in params:
        filter_kwargs['sub_location'] = params['sub_location']
    
    if "location" in params:
        filter_kwargs['location__icontains'] = params['location']
        filter_kwargs['title__icontains'] = params['location']
    if 'owner' in params:
        filter_kwargs['unit__Owner_name'] = params['owner']


    return filter_kwargs


class PropertiesListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        filter_kwargs = create_filter_kwargs(request.query_params)

        full_properties = Properties.objects.all()
        properties = Properties.objects.filter(**filter_kwargs).distinct()
     
        paginator = PageNumberPagination()
        paginator.page_size = 10
        type_serializer = PropertiesListSerializer

      
        if request.query_params.get('project') == 'unit':
           
            units = Unit.objects.filter(property__in=properties)
            properties = units
            type_serializer = unitListSerializer

        
        result_page = paginator.paginate_queryset(properties, request)
        serializer = type_serializer(result_page, many=True)

        response = paginator.get_paginated_response(serializer.data)

        total_pages = paginator.page.paginator.num_pages
        start_index = paginator.page.start_index()
        end_index = paginator.page.end_index()
        current_page = paginator.page.number
        response.data['total_pages'] = total_pages
        response.data['current_page'] = paginator.page.number

        response.data['total_properties'] = properties.count()
        response.data['start_index'] = start_index
        response.data['end_index'] = end_index
        response.data['current_page'] = current_page
        unique_cities = full_properties.values('city').distinct()
        unique_sub_locations = [sub_location[0] for sub_location in property_constants.zone_choices]
        unique_types = [type[0] for type in property_constants.type_choices]
        unique_clients = Owner.objects.values('name').distinct()
        response.data['cities'] = unique_cities
        response.data['sub_locations'] = unique_sub_locations
        response.data['types'] = unique_types
        response.data['owners'] = unique_clients

        return response


class ProjectViews(viewsets.ModelViewSet):
    queryset = Properties.objects.all()
    serializer_class = PropertiesCreateUpdateSerilizer
    permission_classes = [IsAuthenticated]
    def get_serializer(self, *args, **kwargs):

        if self.action == 'list':
            return PropertiesListSerializer(*args, **kwargs)
        

        return super().get_serializer(*args, **kwargs)
    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
        user = request.user
        data['user'] = user.id
        serializer = PropertiesCreateUpdateSerilizer(data=data)
        if serializer.is_valid():
            serializer.save()
            instance = serializer.instance  
            print(instance)
            id = instance.id
            return Response({'id':id})
        return Response(serializer.errors)

class UnitViews(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
    def list(self, request, *args, **kwargs):
        property_id = request.query_params.get('property')
        if property_id:
            queryset = Unit.objects.filter(property=property_id)
        else:
            queryset = Unit.objects.all()
        return Response(data=UnitSerializer(queryset,many=True).data)

class FloorViews(viewsets.ModelViewSet):
    queryset = Floor.objects.all()
    serializer_class = FloorSerializer

class OwnerViews(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    def list(self, request, *args, **kwargs):
        # user = request.user
        queryset = Owner.objects.all()
        paginator = PageNumberPagination()
        paginator.page_size = 5
        result_page = paginator.paginate_queryset(queryset, request)
        serializer = OwnerDisplaySerializer(result_page, many=True)
        total_pages = paginator.page.paginator.num_pages
        start_index = paginator.page.start_index()
        end_index = paginator.page.end_index()
        current_page = paginator.page.number
        response = paginator.get_paginated_response(serializer.data)
        response.data['total_pages'] = total_pages
        response.data['current_page'] = paginator.page.number
        response.data['total_properties'] = queryset.count()
        response.data['start_index'] = start_index
        response.data['end_index'] = end_index
        response.data['current_page'] = current_page
        return response
    def create(self, request, *args, **kwargs):
        data = request.data
        unit = data.get('unit',False)
        if unit:
            data.pop('unit')
        serializer = OwnerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            instance = serializer.instance
            if unit:
                unit = Unit.objects.get(pk=unit)
                unit.Owner = instance
                unit.save()
            return Response({'id':instance.id})
        return Response(serializer.errors)
        # serializer = OwnerDisplaySerializer(queryset, many=True)
        # return response

# Create your views here.
