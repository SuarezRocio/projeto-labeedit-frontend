import React from 'react'
import logo from '../../assets/labenuLogo.png'
import { InputCheck, Img, Div, P, Div1, Input, Form, P1, Button, Div2, P2 } from './Login-styled'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";


function Login() {


  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")

  //const emailito = "sofia@email.com"
  //const passwordcita = ""

  /*const bodyexample =
   {
     "email": "sofia@email.com",
     "password": "S45456d478L"
   }
 
   axios
     .post("https://deploy-labeedit-back.onrender.com/users/login", bodyexample)
     .then((res) => {
       console.log(res.data)
     })
 */

  function handleLogin(e) {
    //const navigate = useNavigate()

    e.preventDefault()

    console.log("hola mundo")

    const bodyexample =
    {
      "email": "sofia@email.com",
      "password": "S45456d478L"
    }

    const body = {
      "email": email,
      "password": password
    }

    axios
      .post("https://deploy-labeedit-back.onrender.com/users/login", body)
      .then((res) => {
        console.log(res.data)
      })

    console.log(password)
    console.log(email)
    console.log(body)


    axios
      .post("https://deploy-labeedit-back.onrender.com/users/login", body)

      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data)
        navigate("/home")
      })

      .catch((error) => {
        console.log(error)
      })


  }
  const navigate = useNavigate()




  return (
    <form onSubmit={(e) => { handleLogin(e) }}>

      <input placeholder="ingrese el email" type="text" onChange={(e) => { setEmail(e.target.value) }} />

      <input placeholder="ingrese la senha" type="text" onChange={(e) => { setPaswword(e.target.value) }} />


      <input type="submit" />
    </form>
  )

}
export default Login