import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const LikedMovies = () => {
  const { likeList } = useContext(GlobalContext);
  return (
    <div>
      {likeList.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  );
};

export default LikedMovies;
