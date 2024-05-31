from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer
from django.shortcuts import render

def index(request):
         return render(request, 'index.html')

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

