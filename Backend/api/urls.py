from django.urls import path
from .views import test_connection , test_api
from .views import test_api

urlpatterns = [
    path('test/', test_connection),
    path('test/', test_api),
]
