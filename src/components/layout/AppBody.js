import React, { useState } from 'react'
import styled from "styled-components"



const Body = styled.div `
    text-align: center;
    margin: 0;
    padding: 0;
    background: #efefef;
    height: 80%;
    padding-top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;

`
const Modulo1 = styled.div `
    width: 80%;
    height: 125px;
    background: #fcf3d7;
    margin: 0 auto;
    color: #1c1c1c;
    
    border-radius: 8px;
    border: 3px solid #969696;

    h5 {
        font-size: 25px;
        border-bottom: 2px solid;
        padding: 
    }
`

export default function AppBody () {
    
    return (
        <Body>
            
            
            <Modulo1>
               <h5> Información del Home </h5>

            </Modulo1> 
        </Body>
    )
}