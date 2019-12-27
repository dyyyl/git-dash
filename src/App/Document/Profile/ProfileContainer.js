import styled from 'styled-components';

const ProfileContainer = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2.5rem;
  margin-top: 5vh;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export default ProfileContainer;
