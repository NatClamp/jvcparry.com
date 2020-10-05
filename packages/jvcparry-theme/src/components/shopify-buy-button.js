import React, { useState } from "react";
import { connect, styled, fetch } from "frontity";


const ShopifyBuyButton = (props) => {

  return (
    <Card>
      <img src={props.product.images[0].src} />
      <CardTitle>{props.product.title}</CardTitle>
      <CardDescription>{props.product.description}</CardDescription>
    </Card>
  );
};

export default connect(ShopifyBuyButton);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  align-items: center;
  border: 1px black solid;
  border-radius: 5px;
  background-color: #fff;
  margin: 10px;

  img {
    max-width: 100px;
  }
`

const CardTitle = styled.h3`
  font-size: 24px;
  margin: 20px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;