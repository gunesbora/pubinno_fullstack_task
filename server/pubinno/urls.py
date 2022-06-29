from django.urls import path

from .views import pubinno_api,pubinno_api_get_update_delete,home


urlpatterns = [
    path('',home),
    path('pubinno/',pubinno_api),
    path('pubinno/<int:pk>',pubinno_api_get_update_delete),
]
