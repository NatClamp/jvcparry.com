import React from "react";
import { connect, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faDAndD, faPatreon } from '@fortawesome/free-brands-svg-icons';
import Link from "./link";
import NewsletterForm from './newsletter-form';

const Footer = ({ state }) => {

  const currentYear = new Date(Date.now()).toLocaleDateString('en-gb', { year: 'numeric' });

  return (
    <>
      <Container>
        <FooterLeft>
          <SocialLinksContainer>
            <StyledLink link="https://twitter.com/jvcparry">
              <FontAwesomeIcon icon={faTwitter} />
            </StyledLink>
            <StyledLink link="http://facebook.com/jvcparry">
              <FontAwesomeIcon icon={faFacebook} />
            </StyledLink>
            <StyledLink link="https://www.dmsguild.com/browse.php?author=jvc+parry">
              <FontAwesomeIcon icon={faDAndD} />
            </StyledLink>
            <StyledLink link="https://www.patreon.com/JVCParry">
              <FontAwesomeIcon icon={faPatreon} />
            </StyledLink>
          </SocialLinksContainer>
          <Copyright>
            © {currentYear} JVC Parry - Built with WordPress and Frontity
          </Copyright>
        </FooterLeft>
        <FooterRight>
          <NewsletterForm />
        </FooterRight>
      </Container>
    </>
  );
};

// Connect the Footer component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  padding: 20px 0;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;

const FooterRight = styled.div`
  width: 40%;

  @media screen and (max-width: 1200px) {
    width: 50%
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin: 10px 0;
  color: #fff;
  font-size: 1.5em;


  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-top: 20px;
  }
`;

const Copyright = styled.p`
  font-size: 16px;
  padding-left: 20px;



  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    margin: 15px auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
