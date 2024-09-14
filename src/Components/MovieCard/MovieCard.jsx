import './MovieCard.css';
import axios from '../../utils/axios';
import YouTube from 'react-youtube';
import React, { useEffect, useState } from 'react';
import { IMG_URL, API_KEY } from '../../utils/constants';

const MovieCard = ({ title, isSmall, url }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [playingMovieId, setPlayingMovieId] = useState(false);
  const [movieURL, setMovieURL] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovieDetails(response.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    axios
      .get(`/movie/${id}/videos${API_KEY}&language=en-US`)
      .then((response) => {
        const { results } = response.data;
        if (results.length > 0) {
          setMovieURL(results[0].key);
        } else console.log('Array Empty');
      });
    setPlayingMovieId(id);
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {movieDetails.map((movie) => {
          return (
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <img
                onClick={() => handleMovieClick(movie.id)}
                key={movie.id}
                src={`${IMG_URL}${movie.backdrop_path}}`}
                alt='movie-poster'
                className={isSmall ? 'movie-poster-small' : 'movie-poster'}
              />
              {playingMovieId === movie.id && movieURL && (
                <div className='trailer-card'>
                  <YouTube opts={opts} videoId={movieURL} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
