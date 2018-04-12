import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams, selectTeam } from "../../actions";
import MainHeader from "../common/headers/main-header";
import CollapsePanel from "./collapse-panel";
import TeamList from "./team-list";
import { bindActionCreators } from "redux";
import {
    // Collapse,
    Container
    // Card,
    // CardImg,
    // CardTitle,
    // CardText,
    // CardGroup,
    // CardBody,
    // CardLink
} from "reactstrap";
// import { LinkContainer } from 'react-router-bootstrap';

import "./teams.css";

class Teams extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            selectedTeam: null
        };
    }

    componentDidMount() {
        this.props.fetchTeams();
        // console.log(this.state);
        // console.log(this.props.teams);
    }
    toggle() {
        this.setState({
            collapse: !this.state.collapse
            // selectedTeam: this.props.teams[e.target.dataset.selected]
        });
        //     // console.log(this.props.teams);
        //     // console.log(e.target.dataset.selected);
        //     // console.log(this.state.selectedTeam.competitor)
        //     console.log(this.state.selectedTeam);
        //     // this.props.selectTeam();
    }
    render() {
        return (
            <div>
                <MainHeader />
                <h1>Teams</h1>{" "}
                <Container>
                    <TeamList
                        teams={this.props.teams}
                        onClick={this.toggle}
                        onTeamSelect={selectedTeam =>
                            this.setState({
                                selectedTeam: selectedTeam
                                // collapse: !this.state.collapse
                            })
                        }
                    />
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        selectedTeam: state.selectedTeam,
        collapse: state.collapse
    };
}

// Anything returned from here will end up as props
// on the Teams container

function mapDispatchToProps(dispatch) {
    // Whenever selectBook or fetchTeams is called, the result should be passed to all of our reducers
    return bindActionCreators(
        {
            // selectTeam: selectTeam,
            fetchTeams: fetchTeams
        },
        dispatch
    );
}

// Promoting Teams from component to a container - it needs to know about the new dispatch methods.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Teams);
