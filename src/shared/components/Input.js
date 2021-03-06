import styled from 'styled-components';

const Input = styled.input`
  margin: 1rem 0;
  height: 2.5rem;
  width: 25rem;
  padding: 0.5rem;
  border: 0;
  border-bottom: 1px solid var(--dark-grey);
  background-color: var(--light-grey);
  box-shadow: none;

  &:focus {
    outline: none;
    border: 1px solid var(--dark-grey);
  }
`;

export default Input;
