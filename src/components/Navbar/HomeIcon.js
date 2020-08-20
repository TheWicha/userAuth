import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HomeIcon = () => {
  const HomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.7em;
  `;

  return (
    <a href="/">
      <HomeIcon icon={faHome} />
    </a>
  );
};

export default HomeIcon;
