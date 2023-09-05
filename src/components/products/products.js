import React, { useState, useEffect } from 'react';
import axiosInstance from "../../axios/instance";
import { Link } from 'react-router-dom';

function Products() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lang, setLang] = useState('en-US');

  const api = 'c93b8d11a6a8c8a7c70f43e8b2a01a9c';
  const path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    // Define a function to fetch movie data
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/3/movie/popular', {
          params: {
            api_key: api,
            language: lang,
            page: currentPage,
          },
        });

        if (response.status !== 200) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = response.data;
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchMovies function when the component mounts, when the currentPage changes, or when the lang changes
    fetchMovies();
  }, [currentPage, lang]);

  const changeLanguage = () => {
    setLang(lang === 'en-US' ? 'ar-SA' : 'en-US');
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 bg-light text-right">
          <button type="button" className="btn btn-primary float-end my-3" onClick={changeLanguage}>
            {lang}
          </button>
        </div>
      </div>
      <h1>Popular Movies - Page {currentPage}</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-6 col-lg-4 col-xl-4" key={movie.id}>
            <div className="card text-black">
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img src={path + movie.poster_path} className="card-img-top" alt="Apple Computer" />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="text-muted mb-4">{movie.overview}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Year</span>
                    <span>{movie.first_air_date}</span>
                  </div>
                </div>
                <Link to={'/details/' + movie.id} style={{ textDecoration: 'none' }}>
                  <div className="row">
                    <div className="col-md-12 bg-light text-right">
                      <button type="button" className="btn btn-primary my-3">
                        Show Movie Details
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Next Page</button>
    </div>
  );
}

export default Products;
