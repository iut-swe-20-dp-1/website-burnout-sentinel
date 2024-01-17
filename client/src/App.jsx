//dependencies import
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import css
import "./App.css";

//components import
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserHomepage from "./pages/UserHomepage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import UserHistory from "./pages/UserHistory";
import UserProfile from "./pages/UserProfile";
import LearnMorePage from "./pages/LearnMorePage";
import Test from "./pages/Test";
import SuggestionPage from "./pages/SuggestionPage";
import GuestModePage from "./pages/GuestModePage";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

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
          <Route
            path="/verify-mail/:action"
            element={<VerifyEmailPage />}
          />{" "}
          {/* action = "reset" to reset pass ||  "activate" for mail verification after registration*/}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <UserHomepage />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <UserHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn-more"
            element={
              <PrivateRoute>
                <LearnMorePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/suggestions"
            element={
              <PrivateRoute>
                <SuggestionPage />
              </PrivateRoute>
            }
          />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

function PrivateRoute({ children }) {
  try {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      // Verify the token
      const decodedToken = jwtDecode(accessToken);

      // Check if the token is expired
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // Token is expired, redirect to login
        return <Navigate to="/login" />;
      }

      // Token is valid, allow access to the protected route
      return <>{children}</>;
    } else {
      // No token found, redirect to login
      return <Navigate to="/login" />;
    }
  } catch (err) {
    console.log("Error during token check:", err);
    // Redirect to login in case of any error
    return <Navigate to="/login" />;
  }
}
export default App;
