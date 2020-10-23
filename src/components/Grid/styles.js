import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: 325px;
  grid-gap: 2rem;
`;
