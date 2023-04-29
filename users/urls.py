from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, GetUserInfo

app_name = 'users'

urlpatterns = [
    path('register/', 
          CustomUserCreate.as_view(), 
          name="create_user"),
    path('logout/blacklist/', 
          BlacklistTokenUpdateView.as_view(),
          name='token_blacklist'),
    path('get_user_info/',
          GetUserInfo.as_view(),
          name='get_user_info'),
]