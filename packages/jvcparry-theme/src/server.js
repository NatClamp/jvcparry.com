import { config } from "dotenv";
import { fetch } from "frontity";
import Client from 'shopify-buy';
import packageClient from "./client";

// Launch dotenv.
config();

const client = Client.buildClient({
  domain: 'jvcparry.myshopify.com/',
  storefrontAccessToken: '6488f139d8c7b8de76ef7c6c45af0a2a',
});

export default {
  ...packageClient,
  actions: {
    theme: {
      ...packageClient.actions.theme,
    }
  },
  state: {
    client: client,
  }
};