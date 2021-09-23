import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";
import Container from "./container";
import Pagination from "./pagination";
import Loader from "./loader";

const API_KEY = "d9a2a89e1dbe265a06a281f6ad70bbb8";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovie = async () => {
    setLoading(true);
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`
    );
    const movieData = await movieResponse.json();
    setLoading(false);
    setMovies(movieData.results);
  };

  useEffect(() => {
    fetchMovie();
  }, [currentPage]);

  const newPage = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  return (
    <div>
      <Pagination data={movies} currentPage={currentPage} newPage={newPage} />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
        )}
      </Container>
    </div>
  );
};

export default Movies;
