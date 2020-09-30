import { config } from "dotenv";
import { fetch } from "frontity";
import packageClient from "./client";

// Launch dotenv.
config();

export default {
  ...packageClient,
  actions: {
    theme: {
      ...packageClient.actions.theme,
      beforeSSR: async ({ state, actions }) => {
        // We fetch the initial link.
        await actions.source.fetch(state.router.link);
        // NOTE: This is not needed if autoFetch is activated in your router.
      },
    }
  },
};