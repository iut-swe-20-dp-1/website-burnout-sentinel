//dependencies import
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import css
import './App.css'

//components import
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
