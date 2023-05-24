import React from 'react'
import logo from '../../assets/labenuLogo.png'
import { Div4, P3 , Img, Div, Div1, Div1, Button , Nav, Div2, Div3} from './SingUp-styled'

const Posteo = () => {
  return (
    <Div>

      <Nav>
      <Img src={logo} />
      <P3>Entrar</P3>
      </Nav>


      {/*<Img src={logo} />
      <P>O projeto de rede social da Labenu</P>*/}

      <Div4>
        Escreva seu post..
      </Div4>
      <Button>Postar...</Button>
  
      <Div3></Div3>

      <Div2>
      <Div1>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</Div1>
      
      <Div1>Qual super poder você gostaria de ter?</Div1>

      <Div1>Se você pudesser ter qualquer tipo de pet, qual você escolheria?</Div1>
      
      <Div1>Se você tivesse que comer apenas uma coisa para o resto de sua vida, o que você escolheria?</Div1>
      </Div2>

    </Div>  
  )
}
export default Posteo;