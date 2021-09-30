import Header from './components/Header';
import ResultList from './components/ResultList';
import NasaProvider from './context/NasaContext';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <NasaProvider>
      <div>
        <GlobalStyles />
        <Header />
        <ResultList />
      </div>
    </NasaProvider>
  );
};

export default App;
