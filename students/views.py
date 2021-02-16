from django.shortcuts import render
from rest_framework import status,generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Student
from .serializers import *

# Create your views here.
@api_view(['GET','POST'])
def students_list(request):
    if request.method=='GET':
        data=Student.objects.all()
        serializer=StudentSerializer(data,context={'request':request},many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
@api_view(['PUT','DELETE'])
def students_detail(request,pk):
    try:
        student=Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method=='PUT':
        serializer=StudentSerializer(student,data=request.data,context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
def index(request):
    return render(request,'student-fe/index.html')
