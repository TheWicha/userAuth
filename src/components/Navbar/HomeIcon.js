import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HomeIcon = () => {
  return (
    <a href="/">
      <HomeIn icon={faHome} />
    </a>
  );
};

export default HomeIcon;

const HomeIn = styled(FontAwesomeIcon)`
  font-size: 1.7em;
`;
