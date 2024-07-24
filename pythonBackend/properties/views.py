

from .models import Properties,Unit,Floor,Features,Owner
from .constants import propertyConstants
from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PropertiesListSerializer , PropertiesCreateUpdateSerilizer,UnitSerializer,FloorSerializer,OwnerSerializer,unitListSerializer
from rest_framework.pagination import PageNumberPagination

property_constants = propertyConstants()

def create_filter_kwargs(params) :
    filter_kwargs = {}
    if 'type' in params:
        filter_kwargs['type'] = params['type']
    if 'min_price' in params:
        filter_kwargs['unit__price__gte'] = params['min_price']
    if 'max_price' in params:
        filter_kwargs['unit__price__lte'] = params['max_price']
    if 'city' in params:
        filter_kwargs['city'] = params['city']
    if 'zone' in params:
        filter_kwargs['zone'] = params['zone']
    if 'max_value' in params:
        filter_kwargs['unit__price__lte'] = params['max_value']
    if 'min_value' in params:
        filter_kwargs['unit__price__gte'] = params['min_value']
    if "location" in params:
        filter_kwargs['location__icontains'] = params['location']
    
    return filter_kwargs


class PropertiesListView(APIView):
    def get(self, request):

        filter_kwargs = create_filter_kwargs(request.query_params)
        
        full_properties = Properties.objects.filter()
        properties = Properties.objects.filter(**filter_kwargs)
        
        paginator = PageNumberPagination()
        paginator.page_size = 4
        type_serializer = PropertiesListSerializer
        if(request.query_params.get('project') == 'unit'):
        # return all units associated with the project
            units = Unit.objects.filter(property__in=properties)
            properties = units
            type_serializer = unitListSerializer
       
        result_page = paginator.paginate_queryset(properties, request)
        serializer = type_serializer(result_page, many=True)
        total_pages = paginator.page.paginator.num_pages
        start_index = paginator.page.start_index()
        end_index = paginator.page.end_index()
        current_page = paginator.page.number
        response = paginator.get_paginated_response(serializer.data)
        response.data['total_pages'] = total_pages
        response.data['current_page'] = paginator.page.number
        response.data['total_properties'] = properties.count()
        response.data['start_index'] = start_index
        response.data['end_index'] = end_index
        response.data['current_page'] = current_page
        unique_cities = full_properties.values('city').distinct()    
        unique_zones = [ zone[0] for zone in property_constants.zone_choices ]
        unique_types = [ type[0] for type in property_constants.type_choices ]
        response.data['cities'] = unique_cities
        response.data['zones'] = unique_zones
        response.data['types'] = unique_types


        return response


class ProjectViews(viewsets.ModelViewSet):
    queryset = Properties.objects.all()
    serializer_class = PropertiesCreateUpdateSerilizer

    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
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

class FloorViews(viewsets.ModelViewSet):
    queryset = Floor.objects.all()
    serializer_class = FloorSerializer

class OwnerViews(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer

# Create your views here.
