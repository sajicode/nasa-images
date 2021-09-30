import styled from 'styled-components';

export const SearchBox = styled.div`
  padding: 10% 2rem;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchInputGroup = styled.div`
  width: 100%;
`;

export const SearchInputGroupBtn = styled.span`
  width: 39px;
  max-width: 38px;
`;

export const SearchInput = styled.input`
  border-radius: 30px 0 0 30px;
  border: medium none;
  height: 40px;
  width: 50%;
  font-size: 2rem;
  color: hsl(210deg, 30%, 8%);
  text-align: center;

  &::placeholder {
    color: red;
    padding: 0 1rem;
  }

  &:focus {
    border: none;
  }
`;

export const SearchBtn = styled.button`
  border-radius: 0 30px 30px 0;
  background-color: var(--navy);
  border: none;
  color: var(--light-grey);
  height: 40px;
`;
