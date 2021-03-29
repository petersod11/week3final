import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Header from './components/header.js';
import App from './App';


class HomePage extends Component{
    render() {
        return (

          <div className="HomePage">
            <Header />
           <App />                      
          </div> 

        );
    }
}
export default HomePage;

ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
  );