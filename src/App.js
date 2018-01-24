import React, { Component } from 'react';
// import { fetchTeams } from './components/api-handler';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Players from './components/players/players';
import Schedule from './components/schedule/schedule';
import Teams from './components/teams/teams';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/teams' component={Teams} />
          <Route path='/players' component={Players} />
          <Route path='/schedule' component={Schedule} />
        </Switch>
      </Router>
    );
  }
}

export default App;
