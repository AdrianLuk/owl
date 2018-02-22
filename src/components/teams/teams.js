import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchTeams} from '../../actions';
import MainHeader from '../common/headers/main-header';
import {Container, ListGroup, ListGroupItem} from 'reactstrap';

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
                    {team.competitor.name}
                </ListGroupItem>
            );
        });
    }

    render() {
        return (
            <div>
                <MainHeader/>
                <Container>
                    <h1>Teams</h1>
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