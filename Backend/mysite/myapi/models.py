from django.db import models



class User(models.Model):
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=10)
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name
    

class Reminder(models.Model):
    title = models.CharField(max_length=35)
    date = models.DateField()
    text = models.TextField()
    user = models.ForeignKey(to=User, null=True, on_delete=models.CASCADE) ## one user can have one o many reminders
    
    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title
    