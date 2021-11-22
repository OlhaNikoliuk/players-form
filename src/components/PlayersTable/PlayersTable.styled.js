import styled from '@emotion/styled/macro';

export const CardsWrap = styled.div`
  margin-top: 80px;
`;

export const CardsList = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(303px, 1fr));
  grid-gap: 24px;
  margin-top: 20px;
  margin: 0 auto;
  list-style: none;
`;
