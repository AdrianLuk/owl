import React, { Component } from "react";
// import { fetchTeams } from './components/api-handler';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/home";
import Players from "../components/players/players";
import Schedule from "../components/schedule/schedule";
import Teams from "../components/teams/teams";
import Standings from "../components/standings/standings";
import Videos from "../components/videos/videos";
import News from "../components/news/news";
import Maps from "../components/maps/maps";
import NotFound from "../components/common/not-found";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/teams" component={Teams} />
                    <Route path="/players" component={Players} />
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/standings" component={Standings} />
                    <Route path="/videos" component={Videos} />
                    <Route path="/maps" component={Maps} />
                    <Route path="/news" component={News} />
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
