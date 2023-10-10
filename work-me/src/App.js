
import './App.css';
import johnwickimage from './johnwickimage.jpg'; 
import React, { useState } from 'react'
import { FaSearch, FaHamburger,FaPlay, FaApple, FaTv  } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM  from 'react-dom';

import {BrowserRouter as router, Switch, Route, Navbar, Link, BrowserRouter} from 'react-router-dom'
import Fetch from './Fetch';
import  {Button, Card, Row, col, Container,  Breadcrumb, Nav, Form, P, input} from 'react-bootstrap';
import ElipsisDetails from './ElipsisDetails';
import MovieCard from './MovieCard';
import movieList from './MovieCard';

function App() {
 
  
  
  
  return (
   

    <div className="App">
    <header className="App-header">
    <img src={johnwickimage} height={500}/>


<Nav className="d-flex mx-auto top-70 col-5 col-md-5 py-3">
  {/* logo section */}
  <div className=" d-md-flex  position-absolute  top-0 m-3 start-0 ">
       <Button className="bg-danger text-light p1  rounded-circle" type='submut'> <FaTv ></FaTv></Button>
        <h1 className="text-light  m-3  fs-6">MovieBox</h1>
      
        </div> 
<div className=" mx-auto top-70 col-5 col-md-5   position-absolute m-3 top-0" >
  {/* search section */}
       <Form className=" form-control gap-7 d-flex top-0 bg-transparent w-100 border-light" id="inner_search_form" action="/search" method="get" >
       <input className="put w-75 mx-auto  top-70 col-10 col-md-8 bg-transparent  text-light"  name="query" onChange={(e)=> (e.target.value.movieList)}   type="text" placeholder="what do you want to watch?"/>
       <Button className=" col-md-0  bg-transparent text-decoration-none d-flex border border-0 " type='submit' onClick={(e)=> (e.target.value)}><FaSearch></FaSearch></Button>
       </Form>
       
      </div>
      
      
      <div className="  gap-2 d-flex centered position-absolute  top-0 m-3 end-0 ">
         {/* log in section */}
      <Button className=" border border-0 bg-transparent   " type='submit'>Login</Button>
      <Button  className="bg-danger text-light  rounded-circle  " type='submit'><FaHamburger ></FaHamburger></Button>
     
      
      </div>
    
</Nav>
     
    
    <Card className="card m-3 text-right d-flex position-absolute top-0 py-5 my-5  start-0 bg-transparent ">
      <div className="position-absoluet text-right p-2 text-right start-0">
      <h1 className="d-flex text-light">John Wick 3: <br></br>  Parabellum</h1>
      <div className="d-flex gap-3 text-center"> <h2 className=" warning rounded ">IMDb</h2>
      <p className="fs-6 text-light">86.0/100</p>
      <FaApple className="apple"></FaApple>
      <p className="fs-6 text-light">97%</p></div>
       <p className="fs-6 d-flex start-0 text-light">John Wick is on the run after killing a menber
       <br></br> of international assassin guild, and <br></br>
       a $14 million price tag on his head, he is the<br></br>
       target of hit men and women everywhere</p>
       <Button className="play text-center d-flex bg-danger border border-0 gap-2mx-auto top-70 col-5 col-md-5  p-1" type='submit'> <FaPlay className="text-danger rounded-circle m-1 p-1 bg-light"></FaPlay>
       <p className="p1">WATCH TRAILER</p>
       </Button>
       
      </div>
     </Card>
     
    
<div className=" w-100">
<h3 className="featured-movie">Featured Movie</h3>
<Fetch/>
</div>

<div className="">
{/* <ElipsisDetails/> */}
</div>



      
    
      </header>

      
    </div>
    
    
  )

}

export default App;




// const url ={https://jsonplaceholder.typicode.com/users};


 
