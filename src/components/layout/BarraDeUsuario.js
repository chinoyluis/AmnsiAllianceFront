import React, { Component, useContext } from 'react'
import styled from "styled-components"
import UserContext from "../../context/UserContext";
import userProfilePic from "../../components/imagenes/luis.png"


const ContainerBarraDeUsuario = styled.div `
overflow-y: scroll;
width: 40%;
color: white;
background-color: #44100e;
clear: both;
text-align: center;
display: flex; 

flex-direction: column;
order: 2;
height: auto;

`


const ProfilePic = styled.img`

position: relative;
top: -15px;
width: 120px;

`
const ProfilePicBorder = styled.div `
    border: 3px solid goldenrod;
    border-radius: 500px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    margin: 20px auto 0;
`

export default function BarraDeUsuario() {
    const { userData } = useContext(UserContext);
    
        return (
            <ContainerBarraDeUsuario>
                
                    <ProfilePicBorder>
                        <ProfilePic src={userProfilePic} alt="profile-picture" />
                    </ProfilePicBorder>
                    <h1>{userData.user.displayName}</h1>
                    
                
                
                

            </ContainerBarraDeUsuario>
        )
    
}

