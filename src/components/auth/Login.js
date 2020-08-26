import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

import styled from "styled-components"
import logo from "../../components/imagenes/amns-logo.png"

const BigWrapper = styled.div`
width: 100%;
  height: fit-content;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color:#3a0d0c;
  
  

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

const Wrapper = styled.div`
  padding-bottom: 50px;
  padding-top: 15vh;
  background-color:#44100e;
  margin: 0 auto ;
  width: 85%;   
  min-width: 280px;
  height: max-content;
  min-height: 100vh; 
  border-radius:5px;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  text-align: center;
  
  `
const Form = styled.form` 
  text-align: center;
  width: 80%;
  max-width: 350px;
  font-size: 0;  
  margin: 0 auto;
`
const FormDiv = styled.div`
    height: fit-content;
    width: 100%;
    text-align: left;
    overflow: hidden;
    margin: 0 auto 25px;
    `

const Logo = styled.img`
width: 250px;
height: auto;
`
const Label = styled.label`
padding: 10px 0;  
color: white;
font-size: 20px;
p {
  padding-left: 10px;
  border-left: 3px solid #DAA520;
}
`
const Input = styled.input`
  position: relative;
  
  width: 100%;
  height: 38px;
  border:1px solid #cbc9c9;
  padding-left:5px;  
  border-radius:0px 3px 3px 0px;
  -webkit-border-radius:0px 3px 3px 0px;
  -moz-border-radius:0px 3px 3px 0px;
  ::placeholder {
    font-size: 1rem;
  }

`

const InputSubmit = styled.input`
  position: relative;
  width: 90%;
  height: 40px;
  margin:15px auto;
  border-radius: 12px;
  background: #DAA520;
  color: white;
  display: block;
  border: 2px solid #303030;
  border-radius:2px 2px 12px 12px;
  -webkit-border-radius:12px 12px 12px 12px;
  -moz-border-radius:12px 12px 12px 12px;
  cursor:pointer;
  ::hover {
  background:#ba8d1a;
  color:#f8f8f8; 
  cursor:pointer;
  }
 
`
 

const UserYpassword = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin: 15px auto 0;
  width: 70%;
  color: rgb(123, 161, 243);
  text-decoration: underline;
  text-align: left; 
  `
const UserYpasswordLinks = styled.a` 
 color: rgb(123, 161, 243);
 `


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      console.log(err.response.data.msg);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (

    <BigWrapper>
      <Wrapper>
        <Logo src={logo} ></Logo>
        
        <br></br>

        
        {error && (
          <ErrorNotice
            message={[error]}
            clearError={() => setError(undefined)}
          />)}
        <Form onSubmit={submit}>
        <hr style={{ opacity: 0.2 }}></hr>
            <FormDiv>
            <Label htmlFor="login-email"><p>Ingrese su correo electrónico</p></Label>
            
            <Input
              type="text"
              placeholder="Correo electrónico"
              id="login-email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}>
            </Input>
          </FormDiv>
          <FormDiv>
            <Label
              htmlFor="login-password">
              <p>Ingrese su contraseña</p>
            </Label>

           

            <Input
              id="login-password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña">

            </Input>
          </FormDiv>

          <InputSubmit type="submit" value="Ingresar"></InputSubmit>

          <hr style={{ opacity: 0.2 }}></hr>
        <UserYpassword>
          <UserYpasswordLinks href="#" >¿Olvidó su contraseña?</UserYpasswordLinks>
          <br></br>
          <UserYpasswordLinks href="#">¿Olvidó su nombre de usuario?</UserYpasswordLinks>
          <br></br>

        </UserYpassword>
        </Form>
        
      </Wrapper>
    </BigWrapper>




  );
}
