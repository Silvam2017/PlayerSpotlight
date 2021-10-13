import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from '../assets/images/detroitLions.png'

const Navibar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // onClick handler to open Azure full-stack web app for QB Rankings
  const handleClick = () => {
      window.open("https://prospectusproject.azurewebsites.net/");
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={Logo} alt='One Pride' className='logo'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="home">Player Spotlight</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick}>QB Rankings</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navibar;