import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import imgLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = ({toggle}) => {
  return (
    
    <>
     <Nav>
      <NavbarContainer>
      
       <NavLogo to="/"> 
          <img src={imgLogo} alt='logo' style={{width:"80px", height:"80px"}}></img> <h1><b>Pen-Coop</b></h1>
       </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks as={Link} to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks as={Link} to="/About">About Us</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks as={Link} to="/Services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks as={Link} to="/Gallery">Gallery</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
     </Nav>
    </>
  );
};

export default Navbar;