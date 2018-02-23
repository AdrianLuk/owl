import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTeams } from '../../actions';
import MainHeader from '../common/headers/main-header';
import {
    Collapse,
    Container,
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody,
    CardLink
} from 'reactstrap';
// import { LinkContainer } from 'react-router-bootstrap';

import './teams.css';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            collapse: false
        };
    }

    componentDidMount() {
        this
            .props
            .fetchTeams();
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    renderTeams() {
        return _.map(this.props.teams, team => {
            // console.log(team)
            return (
                <div className="CardGroup-card" key={team.competitor.id}>
                    <Card className="card-team">
                        <CardImg top width="100%" src={team.competitor.icon} />
                        <CardBody>
                            <CardTitle className="font-weight-bold">{team.competitor.name}</CardTitle>
                            <CardText>{team.competitor.homeLocation}</CardText>
                        </CardBody>
                        <CardLink
                            onClick={this.toggle}
                            className="card-button card-link--withUnderlineAnimation">View Roster</CardLink>
                    </Card>
                    <Collapse isOpen={this.state.collapse}>
                        <div>{team.competitor.name} {team.competitor.players[0].player.name}</div>
                    </Collapse>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <MainHeader /> <h1>Teams</h1> <Container> <CardGroup>
                    {this.renderTeams()}
                </CardGroup> </Container>
            </div >);
    }
}

function mapStateToProps(state) {
    return { teams: state.teams };
}

export default connect(mapStateToProps, { fetchTeams })(Teams);