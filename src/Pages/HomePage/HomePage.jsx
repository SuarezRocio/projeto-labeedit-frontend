import React, { useContext, useState, useEffect } from 'react'
//import logo from '../../assets/labenuLogo.png'
import { Div4, P3, Img, Div, Div1, Button, Nav, Div2, Div3, Button2 } from './HomePage-styled'
import axios from "axios";
//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Header from "../../Componentes/Header";
import PostCard from "../../Componentes/PostCard";
import CommentCard from "../../Componentes/CommentCard";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";




function HomePage() {

  const [post, setPost] = useState([])

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



  return (
    <div>HomePage
      <section>
        {post.map((post, index) => {
          return <div key={index}> {post.content} </div>
        })}
      </section>

    </div>

  )
}
export default HomePage;