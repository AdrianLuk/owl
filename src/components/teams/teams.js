import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchTeams} from '../../actions';
import MainHeader from '../common/headers/main-header';
import {Container, ListGroup, ListGroupItem} from 'reactstrap';

import './teams.css';

class Teams extends Component {
    componentDidMount() {
        this
            .props
            .fetchTeams();
    }

    renderTeams() {
        return _.map(this.props.teams, team => {
            return (
                <ListGroupItem key={team.competitor.id}>
                    <span className="team-logo"><img
                        src={team.competitor.logo}
                        width="50"
                        height="50"
                        alt={team.competitor.name}/></span>
                    <span className="team-name">{team.competitor.name}</span>
                </ListGroupItem>
            );
        });
    }

    render() {
        return (
            <div>
                <MainHeader/>
                <h1>Teams</h1>
                <Container>
                    <ListGroup>
                        {this.renderTeams()}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {teams: state.teams};
}

export default connect(mapStateToProps, {fetchTeams})(Teams);