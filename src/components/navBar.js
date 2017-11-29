import React from 'react'
import {
    Link
  } from 'react-router-dom';

//css
import '../Assets/css/navBar.css'

export class NavBar extends React.Component { 
    render() {
        return (
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><span class="navbar-brand">pav_ka</span></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/features'>Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>
        )
    }
}

