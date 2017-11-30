import React from 'react'
import {
    // eslint-disable-next-line
    Link
  } from 'react-router-dom';

//css
//import '/Users/pawel.klasa/Desktop/portfolio-react/src/Assets/css/home.css';

export class Home extends React.Component { 
    render() {
        return ( 
            <div className="intro-text">
                <div className="text-container pr-2 pl-2">
                    <h1>I design and code the web</h1>
                </div>
            </div>   
        )
    }
}

