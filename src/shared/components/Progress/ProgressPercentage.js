import styled from 'styled-components';

const ProgressPercentage = styled.div`
  width: ${(props) => props.percentage}%;
  height: 0.85rem;
  background-color: ${(props) => props.color};
  border-radius: 50px;
`;

export default ProgressPercentage;
