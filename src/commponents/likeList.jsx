import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../context/globalState";
import Likelist_each from "./likelist_each";
import './like_list.css' 


const LikedMovies = () => {
  const { likeList } = useContext(GlobalContext);
  
  // const like_lists ={
  //   diplay:'grid',
  //   width:'100%',
  //   height:'100%',
  //   position:'absolute',
  //   background:'red',
  //   margin:'10px'
    
   
    
  // }
  
  return (
    <div className='page'>
      <p className='title'>Movie List of Liked</p>

      <div className='like_lists_container'>
        {likeList.map((movie) => (
          <Likelist_each movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default LikedMovies;
