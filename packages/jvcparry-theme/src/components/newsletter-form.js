import React from "react";
import { connect, styled, css } from "frontity";
import Mailchimp from 'react-mailchimp-form';

const NewsletterForm = ({ state }) => {
  return (
    <>
      <Container>
        <SignUp>Sign up for my newsletter:</SignUp>
        <Mailchimp action={state.env.mailchimpURL}
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true,
            }
          ]}
          messages={
            {
              empty: "Please enter your email address",
              button: "Subscribe"
            }
          }
          css={form} />
      </Container>
    </>
  );
};

export default connect(NewsletterForm);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 20px 20px 0;

  @media screen and (max-width: 1000px) {
    margin: 0 20px;
  }

`;

const form = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (min-width: 415px) and (max-width: 1000px) {
    margin: 0 auto;
  }

  input {
    padding: 10px;
    min-width: 300px;
    max-width: 100%;
    margin: 0 20px 0 0;
    font-size: 14px;
    border-radius: 5px;

    @media screen and (max-width: 1000px) {
      margin: 0 0 10px 0;
    }
  }

  button {
    padding: 10px 24px;
    background-color: white;
    font-size: 14px;
    border-radius: 5px;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  
  .msg-alert {
    margin-top: 10px;
    max-height: 20px;
      p {
        font-size: 14px;
        padding: 0;
        margin: 0;
      }
    }
`;

const SignUp = styled.p`
  font-size: 14px;
  @media screen and (min-width: 415px) and (max-width: 1000px) {
    width: 75%;
  }
`;
