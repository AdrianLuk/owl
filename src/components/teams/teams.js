// import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../../actions";
import MainHeader from "../common/headers/main-header";
import TeamList from "./team-list";
import { bindActionCreators } from "redux";
import {
    ROLE_ICON_FLEX,
    ROLE_ICON_SUPPORT,
    ROLE_ICON_OFFENSE,
    ROLE_ICON_TANK
} from "../common/icons/role-icons";
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
            // selectedTeam: this.props.teams[e.target.dataset.selected]
        });
        //     // console.log(this.props.teams);
        //     // console.log(e.target.dataset.selected);
        //     // console.log(this.state.selectedTeam.competitor)
        //     console.log(this.state.selectedTeam);
        //     // this.props.selectTeam();
    }

    renderPlayers(playerData) {
        console.log(playerData);
        let roleIcon;
        // if(playerData.player.attributes.role == 'flex'){
        //     roleIcon = ROLE_ICON_FLEX;
        // }else if(playerData.player.attributes.role == 'support'){
        //     roleIcon = ROLE_ICON_SUPPORT;
        // }
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
                                src={this.state.selectedTeam.competitor.icon}
                                alt={this.state.selectedTeam.competitor.name}
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
                                        src={this.state.selectedTeam.competitor.icon}
                                        alt={this.state.selectedTeam.competitor.name}
                                    />
                                    <div className="TeamRoster-infoWrapper">
                                        <div className="TeamRoster-info">
                                            <h2 className="TeamRoster-name">{this.state.selectedTeam.competitor.name}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="TeamRoster-playerList">
                                    {this.state.selectedTeam.competitor.players.map(
                                        this.renderPlayers
                                    )}
                                </div>
                            </section>
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
