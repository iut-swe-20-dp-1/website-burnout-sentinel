from django.shortcuts import render
import pyrebase
import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from decouple import config
import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth


# Import CORS decorators
# from django.views.decorators.cors import ensure_csrf_cookie, never_cache
# from corsheaders.decorators import cors_headers

# Access the values from the .env file
FIREBASE_API_KEY = config('FIREBASE_API_KEY')
FIREBASE_AUTH_DOMAIN = config('FIREBASE_AUTH_DOMAIN')
FIREBASE_DATABASE_URL = config('FIREBASE_DATABASE_URL')
FIREBASE_PROJECT_ID = config('FIREBASE_PROJECT_ID')
FIREBASE_STORAGE_BUCKET = config('FIREBASE_STORAGE_BUCKET')
FIREBASE_MESSAGING_SENDER_ID = config('FIREBASE_MESSAGING_SENDER_ID')
FIREBASE_APP_ID = config('FIREBASE_APP_ID')
FIREBASE_MEASUREMENT_ID = config('FIREBASE_MEASUREMENT_ID')

# Use these values in your Firebase configuration
firebase_config = {
    "apiKey": FIREBASE_API_KEY,
    "authDomain": FIREBASE_AUTH_DOMAIN,
    "databaseURL": FIREBASE_DATABASE_URL,
    "projectId": FIREBASE_PROJECT_ID,
    "storageBucket": FIREBASE_STORAGE_BUCKET,
    "messagingSenderId": FIREBASE_MESSAGING_SENDER_ID,
    "appId": FIREBASE_APP_ID,
    "measurementId": FIREBASE_MEASUREMENT_ID,
}


firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()

# cred = credentials.Certificate('./firebase-sdk.json')
# firebase_admin.initialize_app()

# @method_decorator(ensure_csrf_cookie, name='dispatch')
# @method_decorator(never_cache, name='dispatch')


@csrf_exempt  # Disable CSRF protection for this view
def signIn(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email')
        password = data.get('password')
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            print("USER IS : ")
            print(user)
            # custom_token = auth.create_custom_token(uid)
            response_data = {"Successfully signed in"}
            return HttpResponse(response_data, status=200)
        except Exception as error:
            response_data = {"error: " + str(error.args[1])}
            return HttpResponse(response_data, status=501)
    else:
        return HttpResponse("This endpoint requires a POST method", status=405)


@csrf_exempt
def signUp(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email')
        password = data.get('password')

        name = data.get('name')
        username = data.get('username')
        dob = data.get('dob')
        gender = data.get('gender')
        try:
            user = auth.create_user_with_email_and_password(email, password)
            response_data = {"Successfully Created user"}
            return HttpResponse(response_data, status=201)
        except Exception as error:
            response_data = {"error: " + str(error.args[1])}
            return HttpResponse(response_data, status=501)
    else:
        return HttpResponse("This endpoint requires a POST method", status=405)
