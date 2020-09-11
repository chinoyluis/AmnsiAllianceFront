import React, { useContext, useState, useRef } from "react"
import UserContext from "../../context/UserContext"
import Header from "../layout/Header"
import AppBody from "../layout/AppBody"
import Burger from "../layout/Burger"
import BarraDeUsuario from "../layout/BarraDeUsuario"
import { useOnClickOutside } from "../../components/misc/ClickOutside"



import styled from "styled-components"


const BigWrapper = styled.div`
  width: 100%;
  height: 100vh;  
  position: absolute;   
  top: 0;
  left: 0;  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0;
  padding: 0;
  

* { 
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
}
:focus {outline:none}
  `
  

 


export default function Main() {
  const { userData } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  return (
   
    <>
    
    <BigWrapper >

      <Header />
      
      <Burger open={open} setOpen={setOpen} /> 
      
      <AppBody  />
     
    </BigWrapper>
    <div ref={node} >
    <BarraDeUsuario open={open} setOpen={setOpen} />
    </div>
    
    </>
   
  )
}
