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
        <Route path="/home" element={<UserHomepage />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
