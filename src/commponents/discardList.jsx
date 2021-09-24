import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import MovieLikeOrDiscardCard from "./common/moiveLikeOrDiscardCard";

const DisLikedMovies = () => {
  const { discardList } = useContext(GlobalContext);

  return (
    <div className="page">
      <p className="subtitle">Movie List of Discard</p>

      <div className="like_lists_container">
        {discardList.map((movie) => (
          <MovieLikeOrDiscardCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default DisLikedMovies;
