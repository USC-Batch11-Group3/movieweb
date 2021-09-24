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
  const [sortType, setSortType] = useState("asc");

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

  const sortByRated = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.vote_average - b.vote_average;
      } else {
        setSortType("asc");
        return b.vote_average - a.vote_average;
      }
    });
    setMovies(sortedList);
  };

  const sortByTitle = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.title.localeCompare(b.title);
      } else {
        setSortType("asc");
        return b.title.localeCompare(a.title);
      }
    });
    setMovies(sortedList);
  };

  const sortByCount = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.vote_count - b.vote_count;
      } else {
        setSortType("asc");
        return b.vote_count - a.vote_count;
      }
    });
    setMovies(sortedList);
  };
  const sortByDate = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.release_date > b.release_date ? 1: -1;
      } else {
        setSortType("asc");
        return b.release_date < a.release_date ? -1: 1;
      }
    });
    setMovies(sortedList);
  };

  return (
    <div>
      <button onClick={sortByTitle}>
        {sortType === "asc" ? "Title ascending" : "Title descending"}
      </button>
      <button onClick={sortByDate}>
        {sortType === "asc" ? "Date ascending" : "Date descending"}
      </button>
      <button onClick={sortByRated}>
        {sortType === "asc" ? "Score ascending" : "Score descending"}
      </button>
      <button onClick={sortByCount}>
        {sortType === "asc" ? "Count ascending" : "Count descending"}
      </button>
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
