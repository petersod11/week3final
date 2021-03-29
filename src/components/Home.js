import React from 'react';
import {Link } from 'react-router-dom';
import{
    BrowserRouter as Router,
    Route,
  
  } from "react-router-dom";
  import Login from './Login';
  import Contact from './Contact';
  import Products from './Products';
const Home = () => {
    return (
       <div className='homepage'>
          <h1>Home</h1>
           <p>Welcome to the Home page for the in development CSP Bookstore</p>
           <Router>
                <Route exact path="/Home" component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/Products" component={Products} />
            </Router>
            <Link to="/Login">Sign In</Link>  
           <Link to="/Contact">Show List of Users</Link>
           <Link to="/Products">Product List</Link>
       </div>
    );
}
 
export default Home;