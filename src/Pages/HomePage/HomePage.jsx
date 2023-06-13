import React, { useState, useEffect } from 'react'
//import styled from '@emotion/styled'
//
//import logo from '../../assets/labenuLogo.png'
//import { Div4, P3, Img, Div, Div1, Button, Nav, Div2, Div3, Button2 } from './HomePage-styled'
import axios from "axios";
//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import Header from "../../Componentes/Header";
//import PostCard from "../../Componentes/PostCard";
//import CommentCard from "../../Componentes/CommentCard";
//import { BASE_URL, TOKEN_NAME } from "../../constants/url";
//import { GlobalContext } from "../../contexts/GlobalContext";
//import { goToLoginPage } from "../../routes/coordinator";
import { H3, Label4, Button, Div, Button2, Img, Div2, Section } from './HomePage-styled'

import logo from '../../assets/labenuLogo.png'






function HomePage() {


  //const [form, setForm] = useState()
  const [post, setPost] = useState([])
  const [content, setContent] = useState("")
  const [titulo, setTitulo] = useState("")




  useEffect(() => {

    axios
      .get("https://deploy-labeedit-back.onrender.com/post", { headers: { Authorization: localStorage.getItem("token") } })

      .then((response) => {
        console.log(response.data)
        setPost(response.data)
      })

      .catch((error) => {
        console.log(error)
      })
  }, [])




  function createPost(e) {
    e.preventDefault()

    /* const Headers = {
       "headers": {
         "Authorization": localStorage.getItem("token")
       }
     }
 
     const body = {
       "content": content
     }
 */

    axios
      .post("https://deploy-labeedit-back.onrender.com/post", {
        "content": content
      }, {
        "headers": {
          "Authorization": localStorage.getItem("token")
        }
      })

      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data)
        navigate("/home")
      })

      .catch((error) => {
        console.log(error)
      })
  }



  return (
    <Div>
      <Div2>
        <Img src={logo} />
        <Button2>Deslogar</Button2>
      </Div2>

      <section>
        <form onSubmit={createPost}>
          <Section>
            <H3>Crear post</H3>
            <Label4 htmlFor='tituloPost'>Título:</Label4>
            <input placeholder='digite um título para o seu post'
              name="title"
              onChange={(e) => { setTitulo(e) }}
            />
            <Label4 htmlFor='textoPost'>Texto:</Label4>
            <textarea placeholder='crie um post!'
              name="body"
              onChange={(e) => { setContent(e) }}
            />
          </Section>

          <Button type='submit'>Enviar</Button>

        </form>
      </section>

    </Div>



  )
}

/*return (
  <div>HomePage
    <section>
      {post.map((post, index) => {
        return <div key={index}> {post.content} </div>
      })}
    </section>

  </div>

)
}*/
export default HomePage;