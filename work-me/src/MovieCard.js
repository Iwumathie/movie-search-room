import { Button } from "react-bootstrap"
import Progress from './Progress.js'
import ProgressCircle from "./Progress.js"
import Ellipsis from "./Elipsis.js"


import { useState } from "react"

import Fetch from "./Fetch.js"


const getPosterURL = (posterpath)=> {
    return `https://image.tmdb.org/t/p/w500${posterpath}`
}
// const showDetailsNow = ()=>{
//     const [nowShow, getShowedOne] = useState(false)
// }
const MovieCard = ({poster_path, original_title, release_date, id, vote_average})=>{
    return <div className=" d-flex flex-column py-3 px-3 pt-5  gap-2 ">
        <div className="position-relative ">
        <a href={`https://www.themoviedb.org/movie/${id}` }> <img src={getPosterURL(poster_path)} alt={original_title} className="image-image shadow" /></a>
        <div className="circular-progress"> <ProgressCircle percent={vote_average * 10}/> </div>
        <div className=" position-absolute top-0 end-0 m-2"> <Ellipsis/> </div>
        </div>
      
        
        <div>
            
        <a href={`https://www.themoviedb.org/movie/${id}` } className="a-tag ">{original_title} </a>
        
            <p className="font-here">{release_date}</p>
            </div>
          
         
      
        
    </div>
}

export default MovieCard