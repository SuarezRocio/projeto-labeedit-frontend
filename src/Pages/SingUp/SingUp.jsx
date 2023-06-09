import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SingUp() {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")



  function handleSubmit(e) {
    //const navigate = useNavigate()

    console.log("hola mundo")

    e.preventDefault()

    const body = {
      name,
      email,
      password
    }

    axios
      .post("https://deploy-labeedit-back.onrender.com/users/signup", body)

      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        navigate("/home")
      })

      .catch((error) => {
        console.log(error)
      })


  }
  const navigate = useNavigate()




  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>

      <input placeholder="ingrese el nombre" type="text" onChange={(e) => { setName(e.target.value) }} />

      <input placeholder="ingrese el email" type="text" onChange={(e) => { setEmail(e.target.value) }} />

      <input placeholder="ingrese la senha" type="text" onChange={(e) => { setPaswword(e.target.value) }} />


      <input type="submit" />
    </form>
  )

}
export default SingUp;