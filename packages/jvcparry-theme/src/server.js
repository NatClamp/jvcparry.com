import { config } from "dotenv";
import { fetch } from "frontity";
import Client from 'shopify-buy';
import packageClient from "./client";

// Launch dotenv.
config();

const client = Client.buildClient({
  domain: 'jvcparry.myshopify.com/',
  storefrontAccessToken: '6488f139d8c7b8de76ef7c6c45af0a2a',
}, fetch);

// Fetch all products in your shop
// client.product.fetchAll().then((products) => {
//   // Do something with the products
//   console.log(products[0].id);
// }).catch(e => console.log(e));

client.product.fetch('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3OTAzMDM4MTM3ODY=').then(product => console.log(product.title, product.description)).catch((e) => console.log(e))


export default {
  ...packageClient,
  actions: {
    theme: {
      ...packageClient.actions.theme,
    }
  },
  state: {
    theme: {
      client,
    }
  }
};