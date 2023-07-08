import React from 'react'
import 'bulma/css/bulma.min.css';
import {Navbar} from "react-bulma-components"
function Header() {
  return (
    <div>
      <Navbar color="dark"> 
        <Navbar.Item>Header </Navbar.Item>
      </Navbar>
      
    </div>
  )
}

export default Header
