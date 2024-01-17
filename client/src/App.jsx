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
import Test from './pages/Test';
import SuggestionPage from './pages/SuggestionPage';
import GuestModePage from './pages/GuestModePage';

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
          <Route path="/guest-mode" element={<GuestModePage />} />
          <Route path="/verify-mail/:action" element={<VerifyEmailPage />} /> {/* action = "reset" to reset pass ||  "activate" for mail verification after registration*/}
          {/* <Route path="/home" element={<PrivateRoute><UserHomepage /></PrivateRoute>} /> */}
          <Route path="/home" element={<PrivateRoute><UserHomepage /></PrivateRoute>} />
          <Route path="/history" element={<PrivateRoute><UserHistory /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/learn-more" element={<PrivateRoute><LearnMorePage /></PrivateRoute>} />
          <Route path="/suggestions" element={<PrivateRoute><SuggestionPage /></PrivateRoute>} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}


function PrivateRoute({ children }) {
  // const accessToken = document.cookie?.split('; ').find(row => row?.startsWith('accessToken=')).split('=')[1];
  // const decodedToken = JSON.parse(atob(accessToken?.split('.')[1]));
  // const currentTimestamp = Math.floor(Date.now() / 1000);
  // if (decodedToken?.exp && decodedToken?.exp < currentTimestamp) {
  //   // Token has expired
  //   console.log('Token has expired');
  //   return <Navigate to="/login" />
  // } else {
  const isloggedIn = true
  if (isloggedIn) {
    return <>{children}</>
  }
  else {
    return <Navigate to="/login" />
  }
  // }

}
export default App
