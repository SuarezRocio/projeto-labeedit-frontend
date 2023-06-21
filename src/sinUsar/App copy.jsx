import './App.css'
import React from 'react'
import { TOKEN_NAME } from './constants/url'
//import SingUp from './Pages/SingUp/SingUp'
//import Login from './Pages/Login/Login'
//import { useState, useEffect } from 'react'
//import { GlobalContext } from './contexts/GlobalContext'
//import Router from './routes/Router.jsx'

function App() {

  fetch("https://deploy-labeedit-back.onrender.com/post", {
    headers:
    {
      Authorization: TOKEN_NAME
    }
  }
  ).then((dataresponse) => {
    console.log(dataresponse)
    return dataresponse.json()
  })
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error.response)
    })

    
  //console.log(hola)
  /*
  function App() {
    const [playlists, setPlaylists] = useState([]);
  
    useEffect(() => {
      const token = window.localStorage.getItem(TOKEN_NAME);
  
      if (token) {
        fetchPlaylists();
      }
    }, []);
  
    const fetchPlaylists = async () => {
      try {
        const token = window.localStorage.getItem(TOKEN_NAME);
  
        const config = {
          headers: {
            Authorization: token
          }
        };
  
        const response = await axios.get(BASE_URL + "/post", config);
  
        setPlaylists(response.data);
      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      }
    };
  
    const context = {
      playlists,
      fetchPlaylists
    };
    value={context}
    */

  return (
    <h1>hola</h1>
    /*    <>
      <GlobalContext.Provider>
        <Router />
      </GlobalContext.Provider>
    </>
  */
  )
}
/*
  return (
      <Login/>  
  )
}*/



{/* <SingUp/>
    <HomePage/>
*/}


export default App
