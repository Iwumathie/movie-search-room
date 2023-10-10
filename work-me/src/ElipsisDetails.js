import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import {FaList,  FaHeart, FaBookmark, FaStar } from "react-icons/fa"
const ElipsisDetails = ()=> {
    // const [isOpen, setIsOpen] = useState(false)
    return<div className="d-flex">

    <Card className="card-container position-absolute gap-3 py-2 px-2">
       <a href="" className="elipsis-detial1 d-flex gap-2 text-decoration-none text-warming"> <FaList className="elipsis1"></FaList>Add to List</a>
       <a href="" className="elipsis-detial2 d-flex gap-2 text-decoration-none text-warming"><FaHeart className="elipsis2"></FaHeart>Favorite</a> 
        <a href="" className="elipsis-detial3 d-flex gap-2 text-decoration-none text-warming"><FaBookmark className="elipsis3"></FaBookmark>Watch List</a>
        <a href="" className="elipsis-detial4 d-flex gap-2 text-decoration-none text-warming"><FaStar className="elipsis4"></FaStar>Your Rating</a>
    </Card>
    </div>
} 
export default ElipsisDetails;