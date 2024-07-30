from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, VideoViewSet

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
