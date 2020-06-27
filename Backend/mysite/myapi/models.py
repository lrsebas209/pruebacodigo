from django.db import models



class User(models.Model):
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=10)
    

class Reminder(models.Model):
    title = models.CharField(max_length=35);
    date = models.DateField();
    text = models.TextField();
    
    
    