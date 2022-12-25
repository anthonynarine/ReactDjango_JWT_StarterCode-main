
from django.db import models
from authentication.models import User

# Create your models here.

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=250)
    video_id = models.CharField(max_length=250)
    text = models.CharField(max_length=250)
    likes = models.IntegerField()
    dislikes = models.IntegerField()

