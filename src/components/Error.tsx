import { ErrorStyles } from '../styles';

const Error = ({ message }: { message: string }) => {
  return (
    <ErrorStyles>
      <h1>{message}</h1>
    </ErrorStyles>
  );
};

export default Error;
