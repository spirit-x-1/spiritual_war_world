from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)

class Video(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField()
    thumbnail = models.URLField()
    published_date = models.DateTimeField(auto_now_add=True)
