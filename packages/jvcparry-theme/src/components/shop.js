import { React, useEffect } from 'react'
import { connect, styled, fetch } from "frontity";
import ShopifyBuyButton from "./shopify-buy-button";

const Shop = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <Container>
      <Title>{post.title.rendered}</Title>
      <ProductsContainer>
        {state.theme.shopifyProducts.map(product =>
          <ShopifyBuyButton key={product.id} product={product} />
        )}
      </ProductsContainer>
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

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

`;