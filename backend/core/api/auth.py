from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

@api_view(["POST"])
def register_user(request):
    email=request.data.get('email')
    username=email
    password=request.data.get('password')

    if User.objects.filter(username=username).exists():
                return Response({"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
    user=User.objects.create_user(username=username,email=email,password=password)
    return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def login_user(request):
    email=request.data.get('email')
    password=request.data.get('password')
    user = authenticate(username=email, password=password)
    if user is not None:
           refresh=RefreshToken.for_user(user)
           return Response({
                  "refresh":str(refresh),
                  "access":str(refresh.access_token)
           },status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)