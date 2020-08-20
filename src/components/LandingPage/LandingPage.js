import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import colorPalete from "../../helpers/colorPalete";
import SignUp from "../SignUp";
import LogIn from "../LogIn";
import Settings from "../Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <Router>
      <StyledDiv>
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
      </StyledDiv>
    </Router>
  );
};

export default LandingPage;

const StyledDiv = styled.div`
  height: 100vh;
  background-color: ${colorPalete.background};
`;
