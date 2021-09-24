import React, { useState, useEffect } from "react";
import "./movieCard.css";

const MovieDetail = (props) => {
  const [data, setData] = useState();
  const { id } = props.match.params;

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d9a2a89e1dbe265a06a281f6ad70bbb8&language=en-US`
    )
      .then((res) => res.json())
      .then((results) => {
        console.log(results);

        if (isMounted) setData(results);
      })
      .catch((e) => console.log(e));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!data) return null;

  return (
    <div className="details">
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
      </div>
      <div className="movie-description">
        <h1 className="movie-title">{data.original_title}</h1>
        <div className="moive-date">{data.release_date}</div>
        <div className="movie-genre">
          {data.genres.map((item) => ` | ${item.name}`)}
        </div>
        <div className="movie-overview">{data.overview}</div>
        <div className="movie-vote">{`${data.vote_average}/10`}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
