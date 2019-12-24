from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'yachting_app/MainPage.html')


def search(request):
    return render(request, 'yachting_app/MapSearchPage.html')


def help(request):
    return render(request, 'yachting_app/HelpPage.html')


def marina(request):
    return render(request, 'yachting_app/MarinaPage.html')
