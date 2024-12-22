"""
URL configuration for pluseightseven.github.io project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django_distill import distill_path
from . import views

def get_index():
    return None  # No parameters for the index view

urlpatterns = [
    path('admin/', admin.site.urls),
    distill_path('', views.home, name='home', distill_func=get_index),
    #path('', views.home, name='home'),
    distill_path('pluseightseven.github.io/settings/', views.settings, name='settings', distill_func=get_index),
    distill_path('pluseightseven.github.io/username/', views.username, name='username', distill_func=get_index),
    distill_path('pluseightseven.github.io/account/', views.account, name='account', distill_func=get_index)
]

