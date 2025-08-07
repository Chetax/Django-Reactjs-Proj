from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    roll_number = models.CharField(max_length=20, unique=True)
    gender = models.CharField(max_length=8,default='Other')
    password = models.CharField(max_length=50,null=True,blank=True)

    def __str__(self):
        return self.name
