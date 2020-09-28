import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const NewsletterForm = ({ state }) => {
  return (
    <>
      <Container>
      </Container>
    </>
  );
};

// Connect the NewsletterForm component to get access to the `state` in it's `props`
export default connect(NewsletterForm);

const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 20px 30px;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
