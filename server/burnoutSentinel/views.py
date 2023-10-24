from django.shortcuts import render
import pyrebase
import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Import CORS decorators
# from django.views.decorators.cors import ensure_csrf_cookie, never_cache
# from corsheaders.decorators import cors_headers


# import firebase_admin
# from firebase_admin import credentials, initialize_app

# TODO: Add SDKs for Firebase products that you want to use
# https://firebase.google.com/docs/web/setup#available-libraries

# Your web app's Firebase configuration
# For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebaseConfig = {
    'apiKey': "AIzaSyB75594T8ZxZPmk2Q_2Mfd4O5sOT_iGCW0",
    'authDomain': "dp1-burnout-sentinel.firebaseapp.com",
    'databaseURL': "https://dp1-burnout-sentinel-default-rtdb.asia-southeast1.firebasedatabase.app/",
    'projectId': "dp1-burnout-sentinel",
    'storageBucket': "dp1-burnout-sentinel.appspot.com",
    'messagingSenderId': "755877975811",
    'appId': "1:755877975811:web:95c39d645ec4cb7a5c3b36",
    'measurementId': "G-LWH8G53WFB"
}

# Initialize Firebase

# var app = initializeApp(firebaseConfig)
# var analytics = getAnalytics(app)
firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()


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
            response_data = {"Successfully signed in"}
            return HttpResponse(response_data, status=200)
        except Exception as error:
            response_data = {"error: "+ str(error.args[1])}
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
            response_data = {"error: "+ str(error.args[1])}
            return HttpResponse(response_data, status=501)
    else:
        return HttpResponse("This endpoint requires a POST method", status=405)
