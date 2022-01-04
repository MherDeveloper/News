from django.urls import path
from .views import NewsView, NewsDetailView, CategoryDetail

urlpatterns = [

    path('', NewsView.as_view(), name='home'),
    path('filter/<slug:slug>/', CategoryDetail.as_view(), name='filter'),
    path('<slug:slug>/', NewsDetailView.as_view(), name='news'),
]