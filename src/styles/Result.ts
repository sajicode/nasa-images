import styled from 'styled-components';

export const ResultItem = styled.figure`
  margin: 0 auto;
  padding: 0 var(--s-size);
  width: 95%;

  &:hover {
    box-shadow: 5px 10px 8px (--light-grey);
    transform: scale(1.2);
  }
`;

export const ResultItemImage = styled.img`
  max-width: 110%;
  flex: 1;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

export const ResultItemTitle = styled.figcaption`
  padding: 0.5em 0.8em;
  color: var(--navy);
  text-align: center;
  font-size: var(--font-size-small);
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1em;
  grid-auto-flow: dense;
  margin: 2em;
`;
