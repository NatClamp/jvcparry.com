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
      beforeSSR: async ({ state }) => {
        // const { REACT_APP_MAILCHIMP_URL } = process.env
        // console.log(REACT_APP_MAILCHIMP_URL)
        // const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_TMDB}`
        // const detailsMovie = await fetch(URL)
        //   .then(response => response.json())
        // state.tmdb = { detailsMovie }
      }
    }
  },
};