/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
 BrowserRouter as Router, Route, Switch, Link 
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);

export default App;
