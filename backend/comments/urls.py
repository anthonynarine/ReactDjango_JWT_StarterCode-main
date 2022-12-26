from django.urls import path
from comments import views


urlpatterns = [
        path('', views.post_user_comments),
        path('<str:video_id>/', views.get_comments_by_video_id),
]