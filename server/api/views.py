from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Item, Category, Tag
from django.contrib.auth import authenticate
from .serializers import ItemSerializer, CategorySerializer, TagSerializer, RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from api.authentication import CookieJWTAuthentication
from django.http import JsonResponse
# Create your views here.


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):

    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"User registered successfully"})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    print("Login request")
    username = request.data.get('username')
    password = request.data.get('password')
    print(username, password)

    user = authenticate(username=username, password=password)
    print(user)
    if user is not None:
        tokens = get_tokens_for_user(user=user)
        print(tokens)
        response = Response()

        response.set_cookie(
            key='access',
            value=tokens['access'],
            # httponly=True,
            path="/",
            samesite='Lax',
            secure=False
        )

        response.set_cookie(
            key='refresh',
            value=tokens['refresh'],
            # httponly=True,
            path="/",
            samesite='Lax',
            secure=False
        )

        response.data = {
            'token': tokens['access'],
            'message':'login successfully'
        }

        return response
    
    return Response({'error':'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ItemViewSet(viewsets.ModelViewSet):
    authentication_classes = (CookieJWTAuthentication, )
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

class CategoryViewSet(viewsets.ModelViewSet):
    authentication_classes = (CookieJWTAuthentication, )
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]


class TagViewSet(viewsets.ModelViewSet):
    authentication_classes = (CookieJWTAuthentication, )
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticated]

@api_view(['POST'])
def logout(request):
    response = JsonResponse({"message": "Logged out successfully"})
    response.delete_cookie('access')
    response.delete_cookie('refresh')
    return response