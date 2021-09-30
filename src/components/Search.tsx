import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NasaContext } from '../context/NasaContext';
import {
  SearchBox,
  SearchInputGroup,
  SearchInput,
  SearchInputGroupBtn,
  SearchBtn
} from '../styles';
import { NasaContextType } from '../types';

const Search: React.FC = () => {
  const { searchKeyword, addKeyWord, keyword } = useContext(
    NasaContext
  ) as NasaContextType;

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    addKeyWord(e.currentTarget.value);
  };

  const handleSearchKeyword = async (
    e: React.FormEvent,
    keyword: string | null
  ) => {
    e.preventDefault();
    await searchKeyword(keyword);
    addKeyWord(null);
  };

  return (
    <SearchBox>
      <form onSubmit={(e) => handleSearchKeyword(e, keyword)}>
        <SearchInputGroup>
          <SearchInput
            type="text"
            name="search"
            placeholder="Enter a keyword"
            onChange={handleForm}
          />
          <SearchInputGroupBtn>
            <SearchBtn
              disabled={keyword === null || keyword === '' ? true : false}
            >
              <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
          </SearchInputGroupBtn>
        </SearchInputGroup>
      </form>
    </SearchBox>
  );
};

export default Search;
