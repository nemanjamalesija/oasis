import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Row from './ui/Row';
import Heading from './ui/Heading';
import Button from './ui/Button';
import Input from './ui/Input';

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>
            <Heading as='h2'>Check in and out</Heading>
            <Button variation='primary' size='medium'>
              Check in
            </Button>
            <Button variation='secondary' size='small'>
              Check out
            </Button>
          </Row>

          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Number of guests' />
              <Input type='number' placeholder='Number of guests' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
