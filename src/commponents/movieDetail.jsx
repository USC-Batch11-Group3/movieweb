import React, { useState, useEffect } from "react";


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
      <h2> {data.original_title}</h2>
      <h3>{data.release_date}</h3>
      <h4>{data.vote_average}</h4>
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}/>
      <h5>{data.genres.map((item) => ` | ${item.name}`)}</h5>
      <p> {data.overview}</p>
    </div>
  );
};

export default MovieDetail;
