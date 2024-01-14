//dependencies import
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import css
import './App.css'

//components import
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserHomepage from './pages/UserHomepage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPasswordPage from './pages/ResetPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import UserHistory from './pages/UserHistory';
import UserProfile from './pages/UserProfile';
import LearnMorePage from './pages/LearnMorePage';
import Test from './pages/test';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />        
        <Route path="/verify-mail/:action" element={<VerifyEmailPage />} /> {/* action = "reset" to reset pass ||  "activate" for mail verification after registration*/}
        {/* <Route path="/home" element={<PrivateRoute><UserHomepage /></PrivateRoute>} /> */}
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/history" element={<UserHistory />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/test" element={<Test />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}


function PrivateRoute ({children}){
  const currentUser = true; // get this from a function
  if(currentUser!==null && currentUser!==undefined && currentUser===true ){
    return <>{children}</>
  } else {
    return <Navigate to="/login"/>
  }
}
export default App
