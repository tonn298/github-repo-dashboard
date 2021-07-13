import React from "react";
import styled from "styled-components";

import Dashboard from "./dashboard";

const HomeStyled = styled.div`
  margin: 5vw;
`;

const Home = () => {
  return (
    <HomeStyled data-testid="home">
      <Dashboard />
    </HomeStyled>
  );
};

export default Home;
