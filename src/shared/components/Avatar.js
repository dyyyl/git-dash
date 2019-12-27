import styled from 'styled-components';

const Avatar = styled.img`
  height: 15rem;
  border-radius: 50%;
  min-width: 15rem;

  @media (max-width: 450px) {
    justify-self: center;
  }
`;

export default Avatar;
