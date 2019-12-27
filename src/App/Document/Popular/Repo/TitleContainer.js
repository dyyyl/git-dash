import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 2.5vh 0;
  }
`;

export default TitleContainer;
