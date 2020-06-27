from rest_framework import viewsets

from .serializers import UserSerializer
from .serializers import ReminderSerializer
from .models import User
from .models import Reminder


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('name')
    serializer_class = UserSerializer

class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all().order_by('title')
    serializer_class = ReminderSerializer

