from django.contrib import admin
from django.urls import path,re_path,include
from students.views import students_list,students_detail,StudentListCreate
urlpatterns = [
    path('',StudentListCreate.as_view()),
    path('api/student/',students_list),
    path('detail/',students_detail),

]