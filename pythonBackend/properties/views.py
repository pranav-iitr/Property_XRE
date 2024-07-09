

from .models import Properties,Unit,Floor,Features,Owner
from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PropertiesListSerializer , PropertiesCreateUpdateSerilizer,UnitSerializer,FloorSerializer,OwnerSerializer
from rest_framework.pagination import PageNumberPagination


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
    return filter_kwargs


class PropertiesListView(APIView):
    def get(self, request):

        filter_kwargs = create_filter_kwargs(request.query_params)
        full_properties = Properties.objects.filter()
        properties = Properties.objects.filter(**filter_kwargs)
        paginator = PageNumberPagination()
        paginator.page_size = 4
        result_page = paginator.paginate_queryset(properties, request)
        serializer = PropertiesListSerializer(result_page, many=True)
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
        unique_zones = full_properties.values('zone').distinct()
        unique_types = full_properties.values('type').distinct()
        response.data['cities'] = unique_cities
        response.data['zones'] = unique_zones
        response.data['types'] = unique_types


        return response
        # serializer = PropertiesListSerializer(results, many=True)
        # return 

class ProjectViews(viewsets.ModelViewSet):
    queryset = Properties.objects.all()
    serializer_class = PropertiesCreateUpdateSerilizer

    def create(self, request, *args, **kwargs):
        data = request.data
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
