import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <HomeHeroNavContainer >
      {state.theme.menu.map(([name, link]) => {
      return (
        <HomeHeroNavItem key={name}>
          <Link link={link}>
            {name}
          </Link>
        </HomeHeroNavItem>
      );
    })}

  </HomeHeroNavContainer>
);

export default connect(Nav);

const HomeHeroNavContainer = styled.nav`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 1200px;
  max-width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  margin: 20px;

  @media screen and (max-width: 560px) {
    // display: none;
  }
`;

const HomeHeroNavItem = styled.div`
  padding: 10px;
  margin: 0 20px;
  color: #fff;
  font-size: 1em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border: 2px solid;
    border-radius: 5px;
    padding: 5px 24px;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-color: transparent;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
