import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import colorPalete from "../../helpers/colorPalete";
import SignUp from "../SignUp";
import LogIn from "../LogIn";
import Settings from "../Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LandingPage = () => {
  const StyledCon = styled.div`
    height: 100vh;
    background-color: ${colorPalete.background};
  `;

  return (
    <Router>
      <StyledCon>
        <Navbar />
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
        </Switch>
      </StyledCon>
    </Router>
  );
};

export default LandingPage;
