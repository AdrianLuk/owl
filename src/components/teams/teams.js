import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTeams } from '../../actions';
import MainHeader from '../common/headers/main-header';
import { Container, Card, CardImg, CardTitle, CardText, CardGroup, CardBody, CardLink } from 'reactstrap';

import './teams.css';

class Teams extends Component {
    componentDidMount() {
        this.props.fetchTeams();
    }

    renderTeams() {
        return _.map(this.props.teams, team => {
            console.log(team)
            return (
                <div className="CardGroup-card" key={team.competitor.id}>
                    <Card className="card-team">
                        <CardImg top width="100%" src={team.competitor.icon} />
                        <CardBody>
                            <CardTitle className="font-weight-bold">{team.competitor.name}</CardTitle>
                            <CardText>{team.competitor.homeLocation}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <MainHeader />
                <h1>Teams</h1>
                <Container>
                    <CardGroup>
                        {this.renderTeams()}
                    </CardGroup>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { teams: state.teams };
}

export default connect(mapStateToProps, { fetchTeams })(Teams);