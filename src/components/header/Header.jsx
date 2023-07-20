import React from 'react'
import 'bulma/css/bulma.min.css';
import './header.scss'
import Cart from "../../img/icons8-cart-96.png"
import {Navbar, Dropdown, Icon} from "react-bulma-components"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar color="black" className='header'> 
        <Link to={'/'}> <Navbar.Brand style={{color: '#fff'}} className='header_text'> React-Shop </Navbar.Brand> </Link> 
        <Link to={'/cart'}><img src={Cart} alt="cart" /></Link> 
      </Navbar>
    </div>
  )
}

export default Header
