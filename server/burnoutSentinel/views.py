from django.shortcuts import render
import pyrebase

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
