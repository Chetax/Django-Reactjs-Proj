from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Students.views import StudentViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet, basename='student')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/',include('auth.urls'),name='auth')
]
