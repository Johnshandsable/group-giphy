import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import FavoriteView from '../FavoriteView/FavoriteView';
import SearchView from '../SearchView/SearchView';
import './App.css';
import Nav from '../Nav/Nav';

function App(props) {
  return (
    <div>    
      <Router>
      <Nav />
      <h1>Giphy Search!</h1>
        <Route exact path="/search">
          <SearchView />
        </Route>
        <Route exact path="/favorites">
          <FavoriteView />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;