import React from 'react'
import { connect, styled } from "frontity";

const Shop = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Title>{post.title.rendered}</Title>
      <Html2React html={post.content.rendered} />
    </Container>
  );
};

export default connect(Shop);

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