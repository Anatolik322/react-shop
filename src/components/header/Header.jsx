import React from 'react'
import 'bulma/css/bulma.min.css';
import {Navbar, Dropdown, Icon} from "react-bulma-components"
function Header() {
  return (
    <div>
      <Navbar color="success" style={{height:'110px'}}> 
        <Navbar.Brand style={{color: '#fff'}}> React-Shop </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header
