import './App.css'
//import SingUp from './Pages/SingUp/SingUp'
//import Login from './Pages/Login/Login'
import {useState, useEffect} from 'react'
import {GlobalContext}  from './contexts/GlobalContext'
import Router from './routes/Router.jsx'



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

  return (
    <>
      
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
    </>
  );
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
