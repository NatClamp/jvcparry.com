import { React, useEffect } from 'react'
import { connect, styled, fetch } from "frontity";

const Shop = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  // const getProducts = async () => {
  //   const response = await state.client.product.fetchAll((products) => {
  //     return products.json();
  //   })
  //   actions.theme.addShopifyProducts(response);
  // };

  // useEffect(() => {
  //   state.theme.client.product.fetch('5790303813786')
  //     .then(products => products.json())
  //     .then((products => actions.theme.addShopifyProducts(products)))
  // }, []);


  return (
    <Container>
      <Title>{post.title.rendered}</Title>
      <ProductsContainer>
        {state.theme.shopifyProducts}
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
  justify-content: space-evenly;
  align-items: center;
`;

const ProductCard = styled.div``;