import { connect, styled } from "frontity";


const Shop = ({ state, actions, libraries }) => {

  return (
    <Container>
      <h1>Shopiiiii</h1>
    </Container>
  );
};

export default connect(Shop);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;