import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import FavoriteView from '../FavoriteView/FavoriteView';
import SearchView from '../SearchView/SearchView';
import './App.css';
import Nav from '../Nav/Nav';

// MATERIAL UI
import DataGrid from '@material-ui/core';

function App(props) {
  return (
    <div>
      <Router>
        <Nav />

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
