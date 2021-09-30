import React from 'react';
import { Loader, LoaderImage } from '../styles/Loader';

const LoadingPage = () => {
  return (
    <Loader>
      <LoaderImage src="/images/loader.gif" />
    </Loader>
  );
};

export default LoadingPage;
