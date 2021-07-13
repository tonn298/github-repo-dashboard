import React from "react";
import styled from "styled-components";

import Dashboard from "./dashboard";

const HomeStyled = styled.div`
  margin: 5vw;
`;

const Home = () => {
  return (
    <HomeStyled>
      <Dashboard />
    </HomeStyled>
  );
};

export default Home;
