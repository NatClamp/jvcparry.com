import { config } from "dotenv";

config();

const settings = {
  "name": "jvcparry",
  "state": {
    "frontity": {
      "url": "https://jvcparry.com",
      "title": "JVC Parry",
      "description": "JVC Parry: indie TTRPG creator"
    },
    "env": {
      "mailchimpURL": process.env.REACT_APP_MAILCHIMP_URL,
    }
  },
  "packages": [
    {
      "name": "jvcparry-theme",
      "state": {
        theme: {
          menu: [
            ["Shop", "/shop/"],
            ["Hire", "/hire-me/"],
            ["Blog", "/blog/"],
          ],
          isMobileMenuOpen: false,
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/jvcparry.com",
          "homepage": "/",
          "postsPage": "/blog",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
