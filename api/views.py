from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.serializers import BookSerializer
from api.models import Book
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView

# Create your views here.
def front(request):
    context = { }
    return HttpResponse("return this string")

# @permission_classes([AllowAny])
# @api_view(['GET', 'POST'])
# def book(request):
#     if request.method == 'GET':
#         note = Book.objects.all()
#         serializer = BookSerializer(note, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = BookSerializer(data=request.data)
#         print(request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class BookView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format='json'):
        print(request.user)
        try:
            note = Book.objects.all()
            serializer = BookSerializer(note, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request, format='json'):
        serializer = BookSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookDeleteView(APIView):
    permission_classes = [AllowAny]
    def delete(self, request, pk, format='json'):   
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            book.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

# @api_view(['DELETE'])
# def book_detail(request, pk):
#     try:
#         book = Book.objects.get(pk=pk)
#     except Book.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'DELETE':
#         book.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)