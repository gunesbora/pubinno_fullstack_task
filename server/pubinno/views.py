from django.shortcuts import render,HttpResponse,get_object_or_404
from functools import partial
from .models import Pubinno
from .serializers import PubinnoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def home(request):
    return HttpResponse('<h1>PUBINNO TASK</h1>')


@api_view(['GET','POST'])
def pubinno_api(request):
    if request.method == 'GET':
        pubinno = Pubinno.objects.all()
        serializer = PubinnoSerializer(pubinno,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PubinnoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                'message': f"Pubinno {serializer.validated_data.get('name')} saved successfully!"
            }
            return Response(data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
def pubinno_api_get_update_delete(request,pk):
    pubinno = get_object_or_404(Pubinno,pk=pk)
    if request.method == 'GET':
        serializer = PubinnoSerializer(pubinno)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = PubinnoSerializer(pubinno,data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                'message': f"Pubinno {pubinno.name} updated successfully!"
            }
            return Response(data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PATCH':
        serializer = PubinnoSerializer(pubinno, data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            data = {
                "message": f"Pubinno {pubinno.name} updated successfully"
            }
            return Response(data)
    elif request.method == 'DELETE':
        pubinno.delete()
        data = {
            "message": f"Pubinno {pubinno.name} deleted successfully"
        }
        return Response(data)



