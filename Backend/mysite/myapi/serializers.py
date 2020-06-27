from rest_framework import serializers

from .models import User
from .models import Reminder

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'password')

class ReminderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Reminder
        fields = ('title', 'date', 'text', 'User')