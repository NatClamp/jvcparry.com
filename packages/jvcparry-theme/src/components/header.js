import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 24px 0 24px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 560px) {
    min-height: 100px;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
