import React from "react";
import styled from "styled-components";
import colorPalete from '../../helpers/colorPalete'
import trim from '../../helpers/trim'

const NavIcon = ({name}) => {
  const StyledCon = styled.div`
    background-color: ${colorPalete.white};
    padding: 20px;
  `;



  return (
    <StyledCon>
       <a href={`/${trim(name)}`}>
            {name}
       </a>
    </StyledCon>
  );
};

export default NavIcon;
