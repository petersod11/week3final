import React from 'react'; 
import {Link } from 'react-router-dom';
import HomePage from '../index';
import './index.css';
import{
    BrowserRouter as Router,
    Route,
  
  } from "react-router-dom";


const Contact = () => {
    return (
       <div className='homepage'>
           
           <ul>
               {["Derik", "Bob", "New User"].map((contact, 
               idx) => {
                   return <li key={idx}>{contact}</li>;
               })}
           </ul>
           <Router>
               <Route exact path="../index" component={HomePage} />
           </Router>
           
           <Link to="../">Home</Link>

       </div>
    );
};
 
export default Contact;