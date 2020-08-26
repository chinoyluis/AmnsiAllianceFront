import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import AuthOptions from "../auth/AuthOptions";
import logo from "../../components/imagenes/amns-logo.png"



const HeaderBar = styled.header`
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 0;
  order: 1;
`
const NavBar = styled.nav`
  width: 100%;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  background: #44100e;
  border-bottom: 2px solid rgba(255, 255, 255, 0.425);
  padding: 0 35px;
  button {
    color: white;
    background: rgba(0, 0, 0, 0.08);
    padding: 25px;
    height: 100%;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`
const Logo = styled.img`

margin: 15px auto;
max-width: 150px;
@media (max-width: 550px) {
  display: none;
}

`



export default function Header() {
  

  return (
    <HeaderBar>
      <NavBar>

      
        <Link to="/">
          <Logo src={logo} alt="amnsalliance-logo" />
        </Link>
        
      <AuthOptions />
      </NavBar>
    </HeaderBar>
  );
}
