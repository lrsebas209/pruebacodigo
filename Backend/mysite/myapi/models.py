from django.db import models



class User(models.Model):
    name = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    

class Reminder(models.Model):
    title = models.CharField(max_length=35)
    date = models.CharField(max_length=35)
    text = models.TextField();    