import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Header from "../../components/layout/Header"
import BarraDeUsuario from "../../components/layout/BarraDeUsuario"
import styled from "styled-components"


const BigWrapper = styled.div`
  width: 100%;
  height: 100vh;  
  position: absolute;
  top: 0;
  left: 0;  
  
  
  ::selection {
  background: #ffb7b7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #ffb7b7; /* Gecko Browsers */
}
* { 
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
}
:focus {outline:none}
  `

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <BigWrapper>

      <Header />
      <BarraDeUsuario />
    </BigWrapper>
  );
}
