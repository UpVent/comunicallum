from . import views
from django.urls import path
from .views import Portfolio

app_name = 'portfolio'

urlpatterns = [
    path('', Portfolio, name='home')
]
