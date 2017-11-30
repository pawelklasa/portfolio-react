import React from 'react'
import {
    Link
  } from 'react-router-dom';

//css
import '../Assets/css/navBar.css'

export class NavBar extends React.Component { 
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <Link to='/'><span class="navbar-brand">pav_ka</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active mr-2">
                            <Link to='/'>Projects </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link to='/features'>Features </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link to='/contact'>Contact </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <a href="https://medium.com/pavcoding" target="_blank" rel="noopener noreferrer">Medium</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        View this on <a href="https://github.com/pawelklasa/portfolio-react" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </span>
                </div>
            </nav>
        )
    }
}

