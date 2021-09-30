import { useState } from 'react';
import Popup from 'reactjs-popup';
import { ResultItem, ResultItemImage, ResultItemTitle } from '../styles/Result';
import { ResultData } from '../types';
import 'reactjs-popup/dist/index.css';

const defaultPhoto = '/images/image-placeholder.png';

interface ResultProps {
  imageURL: string;
  metaData: ResultData[];
}

const Result = ({ imageURL, metaData }: ResultProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div>
      <ResultItemTitle>
        <h3>{metaData[0].title.slice(0, 50)}</h3>
      </ResultItemTitle>
      <ResultItem>
        {!loaded && (
          <ResultItemImage
            src={defaultPhoto}
            alt={metaData[0].title}
            width={300}
          />
        )}

        <Popup
          trigger={
            <ResultItemImage
              src={imageURL || defaultPhoto}
              alt={metaData[0].title}
              width={300}
              onLoad={() => setLoaded(true)}
            />
          }
          position="right center"
        >
          <div>
            <p>Title: {metaData[0].title}</p>
            <p>NASA ID: {metaData[0].nasa_id}</p>
            <p>Description: {metaData[0].description}</p>
          </div>
        </Popup>
      </ResultItem>
    </div>
  );
};

export default Result;
