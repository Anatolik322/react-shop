import React from 'react'
import 'bulma/css/bulma.min.css';
import {Navbar, Dropdown, Icon} from "react-bulma-components"
function Header() {
  return (
    <div>
      <Navbar color="dark"> 
        <Navbar.Item style={{color: '#fff'}}> React-Shop </Navbar.Item>
        <Dropdown label="Category:" closeOnSelect={false} icon={<Icon><i aria-hidden="false" className="fas fa-angle-down"/></Icon>}>
          <Dropdown.Item >mens</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="woman">woman</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="jewelary">jewelery</Dropdown.Item>
        </Dropdown>
      </Navbar>
      
    </div>
  )
}

export default Header
