import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    // eslint-disable-next-line
    Link
  } from 'react-router-dom';

//css
import '/Users/pawelklasa/Desktop/portfolio-react/src/Assets/css/default.css'

//components
import { NavBar } from './components/navBar';
import { Footer } from './components/footer';
import { Home } from './components/pages/home';
import { Projects } from './components/pages/projects';
import { Features } from './components/pages/features';
import { Contact } from './components/pages/contact';
import { Sky } from './components/pages/sky';

//transition

class FadeIn extends Component {
  componentDidMount() {
    console.log('componentDidMount', this.displayName);
    var that = this;

    var elem = ReactDOM.findDOMNode(that);

    elem.style.opacity = 0;
    window.requestAnimationFrame(function () {

      elem.style.transition = that.props.transition || 'opacity 2000ms';
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

//animations in a componnt

const MatchWithFade = ({ component: Component, transition, ...rest }) => (
  <Route {...rest} render={(matchProps) => (
    <FadeIn transition={transition}>
    <Component {...matchProps} />
    </FadeIn>
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
          <div className="long">
              <NavBar />
                  <MatchWithFade exact path='/' component={Home} />
                  <MatchWithFade exact path='/projects' component={Projects} transition='opacity 2000ms' />
                  <MatchWithFade exact path='/features' component={Features} transition='opacity 2000ms' />
                  <MatchWithFade exact path='/contact' component={Contact} transition='opacity 2000ms' />
                  <MatchWithFade exact path='/sky' component={Sky} transition='opacity 2000ms' />
              <Footer />
          </div>
      </Router>
    );
  }
}
export default App;

