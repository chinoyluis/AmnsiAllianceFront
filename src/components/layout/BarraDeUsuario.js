import React, { useContext } from 'react'
import { bool } from 'prop-types';
import styled from "styled-components"
import UserContext from "../../context/UserContext";
import userProfilePic from "../../components/imagenes/luis.png"



const ContainerBarraDeUsuario = styled.div `
    cursor: pointer;
    position: absolute;
    overflow-y: auto;
    width: 40%;
    height: 100%;
    color: white;
    background: #44100e;
    clear: both;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 0 0 20px;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition-duration: 500ms;
  
  @media (max-width: 550px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 550px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;

const Spacer = styled.div` 
    width: 100%;
    min-height: 100px;
    margin: 0;
    background: transparent;
    border-bottom: 2px solid rgba(255, 255, 255, 0.425);
`

const ModuloUsuario = styled.div `
width: 100%;
height: 200px;
margin: 0;
padding: 0 25px;
min-height: fit-content; 
border-bottom: 2px solid rgba(255, 255, 255, 0.425);
 :hover {
   background: rgba(0,0,0, 0.3)
 }
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


const LogOutButton = styled.button `
    background: goldenrod;
    cursor: pointer;
    padding: 10px 25px;
    margin: 0 auto;
    color: white;
    border: none;
    border-radius: 15px;
    
    
`

const Modulo = styled.div ` 
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.425);
`
//{userData.user.displayName} <- Incorporar esto
export default function BarraDeUsuario({open}) {
    const { userData, setUserData } = useContext(UserContext);
    BarraDeUsuario.propTypes = {
      ope: bool.isRequired,
    }



    const logout = () => {
        setUserData({
          token: undefined,
          user: undefined,
        });
        localStorage.setItem("auth-token", "");
      };
    
     
        return (
            <ContainerBarraDeUsuario open={open} >
                    <Spacer />
                    <ModuloUsuario>
                        <ProfilePicBorder>
                            <ProfilePic src={userProfilePic} alt="profile-picture" />
                        </ProfilePicBorder>
                        <h6>Luis Gordon</h6>
                    </ModuloUsuario>
                    <Modulo>
                      <h3>Hello!</h3>
                    </Modulo> 
                    <Modulo>
                      <h3>Amir</h3>
                    </Modulo> 
                    <Modulo>
                      <h3>Yo soy un módulo</h3>
                    </Modulo> 
                    <Modulo>
                      <h3>Yo también!</h3>
                    </Modulo> 
                    
                    
                    
                    
                    <LogOutButton onClick={logout}>Cerrar sesión</LogOutButton>
                
                
                

            </ContainerBarraDeUsuario>
        )
    
}

