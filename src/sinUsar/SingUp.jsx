import React, { useState } from 'react'
import logo from '../../assets/labenuLogo.png'
import { P3 ,InputCheck ,Img, Div, P, Div1, Input , Form, P1, Button ,Div2, P2 ,Nav} from './SingUp-styled'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";


const SingUp = () => {
 
 const navigate = useNavigate()
 

 const [ isLoading, setIsLoading] = useState(false)

 const [form, setForm] = {
  nome : "",
  email : "",
  password :"",
  passwordConfirmation : ""
 }
 
const [showPasword , setShowPassword] = useState(false)


const changeForm = (e) => {
  setForm({...form ,
  [e.target.name] : [e.target.value] 
  }) 
}


const singup = async (e) => {
  e.preventDefault()

if(form.password === form.passwordConfirmation){
  try {
    setIsLoading(true)

    const body ={
      name: form.name,
      email: form.email,
      password: form.password
    }

    const response = await axios.post(BASE_URL + "/singup" , body)
    windows.localStorage.setItem(TOKEN_NAME, response.data.token)
/**.setItem */

    setIsLoading(false)
    goToHomePage(navigate)
  } catch{
    setIsLoading(false)
    
    window.alert(error?.data?.response)
    /**Error 404 */
  }
}


}
  return (
    <Div>
{/*
      <Nav>
      <Img src={logo} />
      <P3>Entrar</P3>
      </Nav>
*/}

      {/*<Img src={logo} />
      <P>O projeto de rede social da Labenu</P>*/}
      <P>Olá, boas vindas ao LabEddit </P>

      <Form onSubmit={singUp} autoComplete='off'>
        <Div1>
          <Input placeholder='Nome'
          type={showNome}
          onChange={changeForm}
          value={form.nome}>
          </Input>
        </Div1>
        <Div1>
          <Input placeholder='Email'
          type={showEmail}
          onChange={changeForm}
          value={form.email}>
          </Input>
        </Div1>
        <Div1>
          <label>Senha</label>
          <Input placeholder='Senha' type={showPasword ? "text" : "password"}
          name ={"password"}
          onChange={changeForm}
          value={form.password}>
          </Input>
         <span>
          <Input type ="checkbok"
          value ={setPassword}
          onChange={ () => setShowPassword(!showPasword)}
          >
          </Input>
          </span> 
        
          <label>Confirmation Senha</label>
          <Input placeholder='Senha' type={showPasword ? "text" : "password"}
          name ={"passwordCofirmation"}
          onChange={changeForm}
          value={form.passwordConfirmation}>
          </Input>  
          <h3
          style = {{color: "brown"}}
        >confirmacion de senha nao es correcta</h3>
        </Div1>
        <Div2>
        <P1>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</P1>
        <InputCheck type="checkbox"></InputCheck>
        <P2>Eu concordo em receber emails sobre coisas legais no Labeddit</P2>    
        </Div2>
        <Button disabled={setIsLoading} onClick={() => goToLoginPage(navigate)}>Cadastrar</Button>
      {/*  <Button2>Crear Conta</Button2> */}
        
      </Form>
    </Div>  
  )
}
export default SingUp;