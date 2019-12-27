import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid var(--dark-grey);
  border-radius: 25rem;
  height: 2.5rem;
  min-width: 15rem;
  font-weight: 600;
  margin: 1rem 0;
  margin-left: 1rem;

  &:hover {
    background-color: var(--dark-grey);
    color: var(--light-grey);
  }

  &:disabled {
    &:hover {
      color: #bdbdbd;
      background-color: var(--light-grey);
    }
  }
`;

export default Button;
