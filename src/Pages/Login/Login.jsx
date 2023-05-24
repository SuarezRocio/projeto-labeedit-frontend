import React from 'react'
import logo from '../../assets/labenuLogo.png'
import { InputCheck ,Img, Div, P, Div1, Input , Form, P1, Button ,Div2,  P2 } from './SingUp-styled'

const Login = () => {
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

    const response = await axios.post(BASE_URL + "/login" , body)
    windows.localStorage(TOKEN_NAME, response.data.token)
/**.setItem */

    setIsLoading(false)
    goToHomePage(navigate)
  } catch{
    setIsLoading(false)
    
    window.alert(error?.data?.response)
    /**Error 404 */
  }
}
  return (
    <Div>
     
      <Img src={logo} />
      <P>O projeto de rede social da Labenu</P>
    
      <Form>
        <Div1>
          <Input placeholder='Email'
           name={"email"}
           value={"form.email"}
           onChange={changeForm} 
          >
          </Input>
        </Div1>
        <Div1>
          <Input placeholder='Senha' 
          type={showPasword ? "text" : "password"}
          name={"password"}
          value={"form.password"}
          onChange={changeForm}
          >
          </Input>
     {/* <span>
         <input type ="checkbok"
          value ={setPassword}
          onChange={ () => setShowPassword(!showPasword)}
          >
          </input>
          </span> */}
        </Div1>
        <P1>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</P1>
        <Div2>
        <InputCheck type="checkbox"></InputCheck>
        <P2>Eu concordo em receber emails sobre coisas legais no Labeddit</P2>    
        </Div2>
        <Button disabled={setIsLoading} onClick={() => goToHomePage(navigate)}>Entrar</Button>
        <Button2 disabled={setIsLoading} onClick={() => goToSingUpPage(navigate)}>Crear Conta</Button2> 
        {/**disabled={isLoading} */}
      </Form>
    </Div>  
  )
}
export default SingUp