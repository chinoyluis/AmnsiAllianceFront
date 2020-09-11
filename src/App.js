import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Axios from "axios";
import Main from "./components/pages/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import GlobalStyle from "./components/misc/GlobalStyle";
import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
    
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
        <GlobalStyle />

        
          <>
          {!userData.token ? (  
              <Switch>
                <Route path="/" component={Login} />
                
              </Switch> ) : (
              <Switch>
                <Route exact path="/" component={Main} />
                <Redirect from="/login" to="/" exact />
                <Route path="/register" component={Register} />
              </Switch> 
            )
          }      
          </> 


        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
