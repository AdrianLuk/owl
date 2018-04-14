import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams, selectTeam } from "../../actions";
import MainHeader from "../common/headers/main-header";
import TeamList from "./team-list";
import { bindActionCreators } from "redux";
import {
    // Collapse,
    Container,
    // Card,
    // CardImg,
    // CardTitle,
    // CardText,
    // CardGroup,
    // CardBody,
    // CardLink,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from "reactstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import "../common/headers/main-header.css";
import "./teams.css";

class Teams extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        // this.renderTeam = this.renderTeam.bind(this);
        this.state = {
            modal: false,
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
            modal: !this.state.modal
            // selectedTeam: this.props.teams[e.target.dataset.selected]
        });
        //     // console.log(this.props.teams);
        //     // console.log(e.target.dataset.selected);
        //     // console.log(this.state.selectedTeam.competitor)
        //     console.log(this.state.selectedTeam);
        //     // this.props.selectTeam();
    }

    renderPlayers(playerData) {
        return <p>{playerData.player.name}</p>;
    }

    render() {
        if (!this.state.selectedTeam) {
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
                                    selectedTeam: selectedTeam,
                                    modal: !this.state.modal
                                })
                            }
                        />;
                    </Container>
                </div>
            );
        }
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
                                selectedTeam: selectedTeam,
                                modal: !this.state.modal
                            })
                        }
                    />
                    <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.modal}
                        toggle={this.toggle}>
                        {console.log(this.state.selectedTeam)}
                        <ModalHeader>
                            <img
                                className="modal-header--logo"
                                src={this.state.selectedTeam.competitor.logo}
                            />
                            <span>
                                {this.state.selectedTeam.competitor.name}
                            </span>
                        </ModalHeader>
                        <ModalBody>
                            {this.state.selectedTeam.competitor.players.map(
                                this.renderPlayers
                            )}
                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        selectedTeam: state.selectedTeam,
        modal: state.modal
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
