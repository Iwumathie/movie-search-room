import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

import { Card } from 'react-bootstrap'


function Fetch() {

const [movieList, setMovieList] = useState([])
  const getFetch = ()=>{
    console.log(movieList);
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=a24d768c63a15fd158d6f5e694390681")
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }
  useEffect(()=>{
    getFetch()
  }, [])

  
  return (

    
      
    
    <div className="control-div w-100  start-0 ">
     
      
      {movieList.map((movie, index)=>{
      return <MovieCard key={index} {...movie}/>
        // <img className="movie-images w-25 p-3 py-5 h-25  " src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}/>
       
})}
     
    
    </div>
    
  )
}

export default Fetch;
