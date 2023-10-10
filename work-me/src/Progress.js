import './Progress.css';
import React from 'react'
const ProgressCircle = ({percent})=>{

    const dashArray = Math.PI * 100;
    const dashOffset = Math.pi * (100-percent);

    const bar ={
        low: "#9c1212",
        medium: "#b8bb04",
        high: "#21d07a",
        none: "#070303",
    }
    const track = {
        low: "#f8a0a0",
        medium: "#f3e597",
        high: "#aef8d4",
         none: "#070303",
    }
    const getColor = (rating)=>{
        if(rating>=70) return "high"
        if(rating>=50) return "medium"
        if(rating>0) return "low"
        return "none"
    }
return <div className="progress-bar rounded-circle d-flex">
    <svg width="34px" height="34px" viewBox="0 0 100 100">
        <circle cx="52.5" cy="52.5" r="50" 
        fill="transperent" 
        stroke={track[getColor(percent)]}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
         strokeWidth={6}
         className="scale"/>

<circle cx="52.5" cy="52.5" r="50" 
        fill="transperent" 
        stroke={bar[getColor(percent)]}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
         strokeWidth={6}
         strokeLinecap="round"
         className="scale"/>

    </svg>
    <div className="fs-semibold text-light fs-7 position-absolute">
   {percent? <div>{percent}<span className="percentage-set fs-semibold  text-light position-absolute">
    %
    </span></div>: "NR"}
    
    </div>
</div>
}

export default ProgressCircle; 