from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.search, name='search'),
    path('help', views.help, name='help'),
    path('burlington-harbor-marina', views.marina, name='burlington-harbor-marina')
]