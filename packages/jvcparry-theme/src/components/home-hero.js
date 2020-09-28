import React from "react";
import { connect, styled } from "frontity";
import HomeHeroNav from "./home-hero-nav";

const Header = ({ state }) => {
  return (
    <>
      <HeroContainer>
        <HeroInner>        
          <Title>JVC Parry</Title>
          <Description>Indie TTRPG creator</Description>
          <HomeHeroNav />
        </HeroInner>
      </HeroContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.h3`
  margin: 0;
  padding-bottom: 20px;
`;
