import React, { Fragment, useContext, useEffect } from 'react';
import { NasaContext } from '../context/NasaContext';
import { Container, Results } from '../styles';
import { NasaContextType } from '../types';
import Error from './Error';
import LoadingPage from './Loader';
import Result from './Result';

const defaultPhoto = '/images/image-placeholder.png';

const ResultList = () => {
  const DefaultSearchList = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune'
  ];

  const randomPlanet =
    DefaultSearchList[Math.floor(Math.random() * DefaultSearchList.length)];

  const { results, error, loader, searchKeyword } = useContext(
    NasaContext
  ) as NasaContextType;

  useEffect(() => {
    searchKeyword(randomPlanet);
  }, []);

  if (loader) {
    return <LoadingPage />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <Fragment>
      <Container>
        <Results>
          {results.length &&
            results.map((result) => (
              <Result
                imageURL={result.links ? result?.links[0].href : defaultPhoto}
                metaData={result.data}
                key={result.data[0].nasa_id}
              />
            ))}
        </Results>
      </Container>
    </Fragment>
  );
};

export default ResultList;
