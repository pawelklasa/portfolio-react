import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
//css
import './Assets/css/default.css'

//components
import { NavBar } from './components/navBar';
import { Footer } from './components/footer';
import { Homepage } from './components/pages/homePage.js';
import { Features } from './components/pages/features.js';
import { Contact } from './components/pages/contact.js';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <NavBar />
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/features' component={Features} />
                  <Route exact path='/contact' component={Contact} />
              <Footer />
          </div>
      </Router>
    );
  }
}
export default App;

