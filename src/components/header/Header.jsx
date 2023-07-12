import React from 'react'
import 'bulma/css/bulma.min.css';
import './header.scss'
import Cart from "../../img/icons8-cart-96.png"
import {Navbar, Dropdown, Icon} from "react-bulma-components"
function Header() {
  return (
    <div>
      <Navbar color="black" className='header'> 
        <Navbar.Brand style={{color: '#fff'}} className='header_text'> React-Shop </Navbar.Brand>
        <img src={Cart} alt="cart" />
      </Navbar>
    </div>
  )
}

export default Header
