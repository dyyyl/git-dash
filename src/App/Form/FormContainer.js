import styled from 'styled-components';

const FormContainer = styled.form`
  margin-top: 5rem;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 450px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;

export default FormContainer;
