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



const HomePage = () => {
  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const { post, fetchPost } = context;
  console.log(context)

  const [isLoading, setIsLoding] = useState(false);
  const [postName, setPostName] = useState("");


  useEffect(() => {

    const token = window.localStorage.getItem(TOKEN_NAME)

    if (!token) {
      goToLoginPage(navigate)
    } else {
      fetchPost()
    }
  }, [])

  const createPost = async (e) => {
    e.preventDefault()

    setIsLoding(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME)

      const config = {
        headers: {
          Authorization: token
        }
      }

      const body = {
        name: postName
      }

      await axios.post(BASE_URL + "/post", body, config)

      setPostName()
      setIsLoding()
      fetchPost()
    } catch {

      window.alert(error?.data?.response)
      /**console.log(error?.data?.response) */
    }
  }
  {/*console.log(post)*/ }
  return (
    <Div>


      {/*  <Nav>
      <Button2>X</Button2> 
      <Img src={logo} />
      <P3>Logout</P3>
      </Nav>
*/}
      {/*<Img src={logo} />
      <P>O projeto de rede social da Labenu</P>*/}

      <section>
        <form onSubmit={createPost}>
          <h3>Crear post</h3>
          <section>
            <label>nome</label>
            <input value={postName}
              onChange={(e) => setPostName(e.target.value)}
            ></input>
            <button disabled={isLoading}>Crear post</button>
          </section>
        </form>
      </section>


      <h3>Post</h3>
      <section>
        {post.map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
      </section>


      {/* <h3>Comment</h3>  
    <section>
    {comment.map((comment) => {
      return <CommentCard key ={comment.id} post={comment}/>
    })}    
  </section>*/}

      { /* <Div4>
      </Div4>
      <Button>Postar</Button>
  
      <Div3></Div3>

      <Div2>
      <Div1></Div1>
      
      <Div1></Div1>

      <Div1></Div1>
      
      </Div2>
    */}
    </Div>
  )
}
export default HomePage;