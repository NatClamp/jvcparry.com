import React from "react";
import { connect, styled } from "frontity";
import HomeHeroNav from "./home-hero-nav";

const Header = ({ state }) => {
  return (
    <>
      <HeroContainer>
        <HeroInner>
          <img src="https://jvcparry.files.wordpress.com/2020/08/cropped-jvcp-logo-inverted.png" alt="" />
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

  img {
    max-width: 100px;
    margin-bottom: 20px;
  }
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
    font-size: 1.75em;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.h3`
  margin: 0;
  padding-bottom: 20px;
`;
