import React from 'react'
import logo from '../../assets/labenuLogo.png'
import { Div4,Div, Div1, Div1, Button ,  Div2, Div3} from './SingUp-styled'



/**Button2, Nav,  P3 , Img, */

const Resposta = () => {
  return (
    <Div>



      {/*<Img src={logo} />
      <P>O projeto de rede social da Labenu</P>*/}
    <Div2>  
     <Div1>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</Div1>
    </Div2>  

      <Div4>
        Escreva seu post..
      </Div4>
      <Button>Responda...</Button>
  
      <Div3></Div3>

      <Div2>
      
      <Div1>Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)</Div1>

      <Div1>Não é a maioria, já vi umas enquetes, inclusive nesse sub se não me engano, onde Windows ganhava na qntd de usuários.

        Linux é rápido, tem várias opções pra diferentes gostos.</Div1>
     </Div2>

    </Div>  
  )
}
export default Resposta;