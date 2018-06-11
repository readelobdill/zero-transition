import React, { Component } from 'react';
import './css/App.css';
import './css/Card.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Dark from './components/Dark'
import Light from './components/Light'

class App extends Component {
  render() {
    return (
      <Router basename={'zero-transition'}>
        <Route render={({ location }) => (
          <div className="App">
            <TransitionGroup>
              <CSSTransition key={location.key}
                classNames="card-transition"
                timeout={2500}>
                <Switch location={location}>
                  <Route exact path="/" component={Dark} />
                  <Route path="/light" component={Light} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}/>
      </Router>
    );
  }
}

export default App;
