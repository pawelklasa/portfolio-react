import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // eslint-disable-next-line
    Link
  } from 'react-router-dom';
//css
import './Assets/css/default.css'

//components
import { NavBar } from './components/navBar';
import { Footer } from './components/footer';
import { Projects } from './components/pages/projects.js';
import { Features } from './components/pages/features.js';
import { Contact } from './components/pages/contact.js';
import { Sky } from './components/pages/sky.js';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <NavBar />
                  <Route exact path='/' component={Projects} />
                  <Route exact path='/features' component={Features} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/sky' component={Sky} />
              <Footer />
          </div>
      </Router>
    );
  }
}
export default App;

