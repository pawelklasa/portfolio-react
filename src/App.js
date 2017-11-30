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
import { Home } from './components/pages/home';
import { Projects } from './components/pages/projects';
import { Features } from './components/pages/features';
import { Contact } from './components/pages/contact';
import { Sky } from './components/pages/sky';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg">
          <div className="long">
              <NavBar />
                  <Route exact path='/' component={Home} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/features' component={Features} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/sky' component={Sky} />
              <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

