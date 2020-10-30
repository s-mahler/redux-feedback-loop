import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import {HashRouter as Router, Route} from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
        </div>

        <Route exact path="/" component={Feeling}/>
        <Route path="/understanding" component={Understanding}/>
        <Route path="/supported" component={Supported}/>
      </Router>
    );
  }
}

export default App;
