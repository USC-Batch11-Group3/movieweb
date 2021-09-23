import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const DisLikedMovies = () => {
  const { discardList } = useContext(GlobalContext);
  return (
    <div>
      {discardList.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  );
};

export default DisLikedMovies;
