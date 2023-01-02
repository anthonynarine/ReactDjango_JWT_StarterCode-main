from django.urls import path
from comments import views


urlpatterns = [
        path('', views.get_all_comments),
        path('<str:video_id>/', views.get_user_comments),
]