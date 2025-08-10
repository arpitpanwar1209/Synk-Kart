from django.urls import path
from inventory.views import product_list

urlpatterns = [
    path('api/products/', product_list),
]
