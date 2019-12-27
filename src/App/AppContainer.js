import styled from 'styled-components';

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  min-height: 100vh;

  @media (max-width: 450px) {
    padding: 1.6rem;
  }
`;

export default AppContainer;
