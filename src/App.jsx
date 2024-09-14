import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import MovieCard from './Components/MovieCard/MovieCard';
import { ORIGINALS, ACTION, HORROR, COMEDY } from './utils/urls';
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <MovieCard url={ORIGINALS} title='Netflix Originals' />
      <MovieCard url={ACTION} title='Action' isSmall />
      <MovieCard url={HORROR} title='Horror' isSmall />
      <MovieCard url={COMEDY} title='Comedy' isSmall />
    </div>
  );
}

export default App;
