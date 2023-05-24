import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../Components/Login/Login"
import HomePage from "../Components/HomePage/HomePage"
import SingUp from "../Components/Login/Login"



export default function Router (){
    return (
        <BrowserRouter>
        <Routes>
        <Route path= "/" element={<HomePage/>} />
        <Route path= "/Login" element={<Login/>} />
        <Route path= "/SingUp" element={<SingUp/>} />            
        </Routes>    
        </BrowserRouter>
    )
}