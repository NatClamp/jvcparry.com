import React, { useEffect } from "react";
import { Global, css, connect, styled, Head, fetch } from "frontity";
import Switch from "@frontity/components/switch";
import Client from 'shopify-buy';
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./home";
import Shop from "./shop";
import ProductPage from "./product-page";
import Hire from "./hire";
import HomeHero from "./home-hero";
import Footer from "./footer";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions, libraries }) => {

  useEffect(() => {
    actions.source.fetch("/");

    const client = Client.buildClient({
      domain: 'jvcparry.myshopify.com/',
      storefrontAccessToken: '6488f139d8c7b8de76ef7c6c45af0a2a',
    }, fetch);

    client.product.fetchAll()
      .then((products => actions.theme.addShopifyProducts(products)))
  }, []);



  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        {data.isHome ? < HomeHero /> : <Header />}
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <Shop when={data.route === "/shop/"} products={state.theme.shopifyProducts} />
          <ProductPage when={data.isProductPage} />
          <Hire when={data.route === "/hire-me/"} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError />
        </Switch>
      </Main>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
  overflow-x: hidden;

`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

const FooterContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  background: black;
`;