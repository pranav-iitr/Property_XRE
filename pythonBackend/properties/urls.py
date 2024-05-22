from django.urls import include, path
from .views import PropertiesListView,ProjectViews,UnitViews,FloorViews,OwnerViews
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'projects', ProjectViews)
router.register(r'unit', UnitViews)
router.register(r'floors', FloorViews)
router.register(r'owners', OwnerViews)



urlpatterns = [
    path('list/', PropertiesListView.as_view()),
    path('', include(router.urls)),
   
]