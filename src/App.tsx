import './App.scss';
import Header from './components/Header';
import SearchResultsContainer from './components/SearchResultsContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchResultsContainer></SearchResultsContainer>
    </div>
  );
}

export default App;
