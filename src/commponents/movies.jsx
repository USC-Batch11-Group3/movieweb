import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";
import Container from "./container";

const API_KEY = "d9a2a89e1dbe265a06a281f6ad70bbb8";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const movieData = await movieResponse.json();
    setMovies(movieData.results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Container>
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </Container>
    </div>
  );
};

export default Movies;
