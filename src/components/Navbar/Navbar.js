import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import colorPalete from "../../helpers/colorPalete";

import NavIcon from "./NavIcon";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
  const StyledCon = styled(Container)`
    background-color: ${colorPalete.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const NavIcons = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  return (
    <StyledCon>
      <HomeIcon />
      <NavIcons>
        <NavIcon name={`Sign Up`} />
        <NavIcon name={`Log In`} />
        <NavIcon name={`Settings`} />
      </NavIcons>
    </StyledCon>
  );
};

export default Navbar;
