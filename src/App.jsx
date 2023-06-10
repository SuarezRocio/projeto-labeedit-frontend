import './App.css'
import React, { useEffect, useState } from 'react'
import { TOKEN_NAME } from './constants/url'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SingUp from './Pages/SingUp/SingUp'
import HomePage from './Pages/HomePage/HomePage'
import Login from "./Pages/Login/Login"
//import { useState, useEffect } from 'react'
//import { GlobalContext } from './contexts/GlobalContext'
//import Router from './routes/Router.jsx'



function App() {


  return (
    <>
      <h1>hola</h1>
      <BrowserRouter>
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SingUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
