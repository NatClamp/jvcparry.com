import { React, useEffect } from 'react'
import { connect, styled } from "frontity";

const ProductPage = ({ state, actions, libraries }) => {

  useEffect(() => {
    const endpoint = state.router.link;
    const chosenProduct = endpoint.substring(6, endpoint.length - 1);
    const productDetails = state.theme.shopifyProducts.filter(product => product.handle === chosenProduct);
    actions.theme.singleShopifyProduct = productDetails[0]
  }, []);



  return (
    <Container>
      <Title>{state.theme.singleShopifyProduct.title}</Title>
      <ProductContainer>
        <img src={state.theme.singleShopifyProduct.images[0].src} />
        <p>{state.theme.singleShopifyProduct.description}</p>
      </ProductContainer>
    </Container>
  );
};

export default connect(ProductPage);

const Title = styled.h3`
  font-size: 30px;
`;

const Container = styled.div`
  width: 1000px;
  margin: 0;
  padding: 24px;
  background-color: #fff;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    max-width: 400px;
    margin-right: 20px;
  }

  p {
    font-size: 18px;
    margin-left: 10px;
    max-width: 400px;
  }
`;
