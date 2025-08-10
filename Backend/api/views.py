from django.shortcuts import render
from django.http import JsonResponse

def test_connection(request):
    return JsonResponse({"message": "Hello from Django Backend!"})
def test_api(request):
    return JsonResponse({"message": "Backend is working!"})


# Create your views here.
