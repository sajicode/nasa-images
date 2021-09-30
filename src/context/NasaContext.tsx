import { createContext, useState } from 'react';
import { ResultType, NasaContextType } from '../types';
import axios from 'axios';

export const NasaContext = createContext<NasaContextType | null>(null);

const NASA_URL = 'https://images-api.nasa.gov/search';

const NasaProvider: React.FC = ({ children }) => {
  const [results, setResults] = useState<ResultType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string | null>(null);

  const searchKeyword = async (keyword: string | null) => {
    setLoader(true);
    setError(null);

    try {
      const { data } = await axios.get(`${NASA_URL}?q=${keyword}`);
      if (!data.collection.items.length) {
        setKeyword(null);
        setLoader(false);
        setError('No Results');
        return;
      }
      setKeyword(null);
      setLoader(false);
      setResults(data.collection.items);
    } catch (error) {
      console.log(error);
      setKeyword(null);
      setResults([]);
      setLoader(false);
      setError('Server Error');
    }
  };

  const addKeyWord = async (keyword: string | null) => {
    setKeyword(keyword);
  };

  return (
    <NasaContext.Provider
      value={{ results, error, searchKeyword, loader, keyword, addKeyWord }}
    >
      {children}
    </NasaContext.Provider>
  );
};

export default NasaProvider;
