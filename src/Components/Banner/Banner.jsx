import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../utils/axios';
import { API_KEY, BASE_URL, IMG_URL } from '../../utils/constants';

const Banner = () => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trending/movie/day${API_KEY}&language=en-US`)
      .then((response) => setMovieDetails(response.data.results[1]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${IMG_URL}${movieDetails.backdrop_path})`,
      }}>
      <div className='content'>
        <h1 className='title'>{movieDetails.title}</h1>
        <p className='description'>{movieDetails.overview}</p>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
      </div>
      <div className='fade-background'></div>
    </div>
  );
};

export default Banner;
