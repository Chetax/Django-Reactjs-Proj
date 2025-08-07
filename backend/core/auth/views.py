from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from Students.models import Student
from Students.serializers import StudentSerializer
@api_view(["POST"])
def register_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    name = request.data.get('name', '')  # Optional, you can require other fields too
    roll_number = request.data.get('roll_number', '')
    gender = request.data.get('gender', 'Other')
    if not email or not password:
        return Response({"error": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    if Student.objects.filter(email=email).exists():
        return Response({"error": "Student with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)

    student = Student(
        name=name,
        email=email,
        roll_number=roll_number,
        gender=gender,
    )
    student.set_password(password)  
    student.save()

    serializer = StudentSerializer(student)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def login_user(request):
    email=request.data.get('email')
    password=request.data.get('password')
    if not email or not password:
        return Response({"error": "Email and password required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        student=Student.objects.get(email=email)
    except Student.DoesNotExist:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    if student.check_password(password):
        return Response({"message": "Login successful", "student_id": student.id}, status=status.HTTP_200_OK)
    else :
         return Response({"message":"Invalid Creadentials"},status=status.HTTP_401_UNAUTHORIZED)


