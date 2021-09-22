import React from "react";
import Button from "./button";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const truncate = (input) =>
    input.length > 25 ? `${input.substring(0, 25)}...` : input;

  return (
    <div className="movieCard">
      <img src={IMG_URL + props.data.poster_path} alt={props.data.title} />
      <Button />
      <span className="movie-title">{truncate(props.data.title)}</span>
      <span className="release-date">{props.data.release_date}</span>
    </div>
  );
};

export default MovieCard;
