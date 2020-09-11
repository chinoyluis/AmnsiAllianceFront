import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import UserContext from "../../context/UserContext"
import AuthOptions from "../auth/AuthOptions";
import logo from "../../components/imagenes/amns-logo.png"



const HeaderBar = styled.header`
  width: 100%; 
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  
`
const NavBar = styled.nav`
  width: 100%;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #44100e;
  border-bottom: 2px solid rgba(255, 255, 255, 0.425);
  padding: 0 35px;
  height: 100px;
 
`


const Logo = styled.img`

  margin: 15px auto 0;
  max-width: 125px;

`



export default function Header() {
  
  const { userData, setUserData } = useContext(UserContext);

  return (
    
    <HeaderBar>
    
      <NavBar>
      
      
        
        <Link to="/">
          <Logo src={logo} alt="amnsalliance-logo" />
        </Link>
        
      
      </NavBar>
    
    </HeaderBar>
  );
}
