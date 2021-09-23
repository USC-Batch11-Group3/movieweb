import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const truncate = (input) =>
    input.length > 25 ? `${input.substring(0, 25)}...` : input;

  return (
    <Link to={`/movies/${props.data.id}`}>

    <div className="movieCard">
      <img src={IMG_URL + props.data.poster_path} alt={props.data.title} />
      <div className="score_count">
        <div>
          Score: {props.data.vote_average} | Count: {props.data.vote_count}
        </div>
      </div>
      <Button data={props.data} />
      <span className="movie-title">{truncate(props.data.title)}</span>
      <span className="release-date">{props.data.release_date}</span>
    </div>
    </Link>
  );
};

export default MovieCard;
