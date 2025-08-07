from home.views import index 
from django.urls import path
 
from django.urls import path
from .auth import register_user, login_user

urlpatterns = [
    path('register/', register_user),
    path('login/', login_user),
]
