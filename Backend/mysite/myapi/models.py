from django.db import models



class User(models.Model):
    name = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    

class Remember(models.Model):
    title = models.CharField(max_length=35)
    date = models.CharField(max_length=35)
    text = models.CharField(max_length=35)
    def __str__(self):
        return self.title