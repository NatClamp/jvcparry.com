import React from 'react'
import { connect, styled } from "frontity";
import Promotion from "./promotion";
import AboutMe from "./about-me";

const Home = ({ state, actions, libraries }) => {

  return (
    <Container>
      {/* <Promotion /> */}
      {/* <AboutMe /> */}
    </Container>
  );
};

export default connect(Home);

const Container = styled.div`
  width: 1000px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

