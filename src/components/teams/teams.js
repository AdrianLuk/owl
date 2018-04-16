// import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../../actions";
import MainHeader from "../common/headers/main-header";
import Footer from "../common/footers/main-footer";
import TeamList from "./team-list";
import { bindActionCreators } from "redux";
import {
    ROLE_ICON_FLEX,
    ROLE_ICON_SUPPORT,
    ROLE_ICON_OFFENSE,
    ROLE_ICON_TANK
} from "../common/icons/role-icons";
// import { EXTERNAL_URL } from "../common/icons/general-icons";
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
    Button,
    Modal,
    ModalBody,
    ModalHeader
    // ModalFooter
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
        });
    }

    renderPlayers(playerData) {
        let roleIcon;

        switch (playerData.player.attributes.role) {
            case "flex":
                roleIcon = ROLE_ICON_FLEX;
                break;
            case "support":
                roleIcon = ROLE_ICON_SUPPORT;
                break;
            case "offense":
                roleIcon = ROLE_ICON_OFFENSE;
                break;
            case "tank":
                roleIcon = ROLE_ICON_TANK;
                break;
            default:
                break;
        }
        return (
            <div
                className="TeamRoster-player PlayerHandle"
                key={playerData.player.id}>
                <svg className="Icon Icon--lightFill">{roleIcon}</svg>
                <div className="PlayerHandle-handleWrapper">
                    <div className="PlayerHandle-handle">
                        {playerData.player.name}
                    </div>
                    <div className="PlayerHandle-name">
                        {playerData.player.givenName}{" "}
                        {playerData.player.familyName}
                    </div>
                </div>
            </div>
        );
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
                        />
                    </Container>
                    <Footer />
                </div>
            );
        }
        let owlDivision;
        if (this.state.selectedTeam.competitor.owl_division === 79) {
            owlDivision = "Atlantic Division";
        } else {
            owlDivision = "Pacific Division";
        }
        // const urlIcon = EXTERNAL_URL;
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
                        <span onClick={this.toggle} className="modal-close">
                            <span className="fas fa-times" />
                        </span>
                        <div
                            className="modal-border"
                            style={{
                                border: `5px solid #${
                                    this.state.selectedTeam.competitor
                                        .secondaryColor
                                }`
                            }}>
                            <ModalHeader
                                style={{
                                    borderBottom: `3px solid #${
                                        this.state.selectedTeam.competitor
                                            .primaryColor
                                    }`
                                }}>
                                <img
                                    className="modal-header--logo"
                                    src={
                                        this.state.selectedTeam.competitor.icon
                                    }
                                    alt={
                                        this.state.selectedTeam.competitor.name
                                    }
                                />
                                <span>
                                    {this.state.selectedTeam.competitor.name}
                                </span>
                            </ModalHeader>
                            <ModalBody>
                                <section className="TeamRoster">
                                    <div className="TeamRoster-teamInfo">
                                        <img
                                            className="TeamRoster-logo img-fluid"
                                            src={
                                                this.state.selectedTeam
                                                    .competitor.icon
                                            }
                                            alt={
                                                this.state.selectedTeam
                                                    .competitor.name
                                            }
                                        />
                                        <div className="TeamRoster-infoWrapper">
                                            <div className="TeamRoster-info">
                                                <h2 className="TeamRoster-name">
                                                    {
                                                        this.state.selectedTeam
                                                            .competitor.name
                                                    }
                                                </h2>
                                                <p className="TeamRoster-content">
                                                    {
                                                        this.state.selectedTeam
                                                            .competitor
                                                            .homeLocation
                                                    }
                                                </p>
                                                <div className="TeamRoster-division">
                                                    {owlDivision}
                                                </div>
                                            </div>
                                            <a
                                                target="_blank"
                                                className="TeamRoster-link"
                                                href={`https://${this.state.selectedTeam.competitor.name
                                                    .split(" ")
                                                    .pop()
                                                    .toLowerCase()}.overwatchleague.com`}>
                                                Team Website
                                                <svg
                                                    className="Icon"
                                                    id="icon-external-url"
                                                    viewBox="0 0 64 64"
                                                    width="100%"
                                                    height="100%">
                                                    <path d="M21.7,39.1c3.9-6.1,9-10,19.1-10v7L53.7,25,40.8,13.8v6.7C26.1,20.5,21.7,33,21.7,39.1Z" />
                                                    <path d="M48.8,35.7V47.2a.5.5,0,0,1-.5.5h-35a.5.5,0,0,1-.5-.5v-26a.5.5,0,0,1,.5-.5H25.9l5-5H13.3a5.5,5.5,0,0,0-5.5,5.5v26a5.5,5.5,0,0,0,5.5,5.5h35a5.5,5.5,0,0,0,5.5-5.5V30.7Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="TeamRoster-playerList">
                                        {this.state.selectedTeam.competitor.players.map(
                                            this.renderPlayers
                                        )}
                                    </div>
                                    <Button
                                        color="link"
                                        onClick={this.toggle}
                                        className="TeamRoster-close">
                                        <span className="button-text">
                                            Close
                                        </span>
                                    </Button>
                                </section>
                            </ModalBody>
                        </div>
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
