import React from 'react'; 
import {Link } from 'react-router-dom';
import HomePage from '../index';
import './index.css';
import{
    BrowserRouter as Router,
    Route,
  
  } from "react-router-dom";

const Products = () => {
    return (
       <div className='homepage'>

           <ul>
               {["Taming of the Shrew", "A Quiet Place", "The Beginners Guide to the Universe"].map((Products, 
               idx) => {
                   return <li key={idx}>{Products}</li>;
               })}
           </ul>
           <Router>
               <Route exact path="../index" component={HomePage} />
           </Router>
           
           <Link to="../">Home</Link>

       </div>
    );
};
 
export default Products;