import React from 'react'
import logo from '../../assets/labenuLogo.png'
import { P3 , Img, Div, Nav, Button2} from './SingUp-styled'

const Logout = () => {
  return (
    <Div>

      <Nav>
      <Button2>X</Button2> 
      <Img src={logo} />
      <P3>Logout</P3>
      </Nav>


    </Div>  
  )
}
export default Logout;