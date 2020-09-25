const settings = {
  "name": "jvcparry",
  "state": {
    "frontity": {
      "url": "https://jvcparry.com",
      "title": "JVC Parry",
      "description": "JVC Parry: indie TTRPG creator"
    }
  },
  "packages": [
    {
      "name": "jvcparry-theme",
      "state": {
        theme: {
          menu: [
            ["Home", "/"],
            ["Shop", "/shop/"],
            ["Posts", "/posts/"],
            ["DnD", "/posts/category/adventures/"]
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
          "postsPage": "/posts/",
          "homepage": "/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
