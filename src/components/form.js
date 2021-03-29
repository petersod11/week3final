import React from 'react';
import {Link } from 'react-router-dom';
import HomePage from '../index';
import{
    BrowserRouter as Router,
    Route,
  
  } from "react-router-dom";
import './index.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '', };
      }
      
      myChangeHandler = (event) => {
          let nam = event.target.name;
          let pass = event.target.password;
        this.setState({[nam]: pass});
      }
      render() {
        return (
            <div className="form">
          <form>
          <p>User name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Password:</p>
          <input 
            type='text'
            name='password'
            onChange={this.myChangeHandler}
            />
            <br/>
            <br/>
            <input type='submit' value="Submit"/>
            <br/>
            <br/>
            <input type='submit' value="New User"/>
          </form>
          <br></br>
          <Router>
               <Route exact path="../index" component={HomePage} />
           </Router>
           
           <Link to="../">Home</Link>
          </div>
        );
        
      }
      
    }
    
  export default Form 