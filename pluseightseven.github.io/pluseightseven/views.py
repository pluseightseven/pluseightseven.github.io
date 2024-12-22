from django.shortcuts import render


def home(request):
    return render(request, 'home.html')
def account(request):
    return render(request, 'account.html')
def username(request):
    return render(request, 'username.html')
def settings(request):
    return render(request, 'settings.html')
