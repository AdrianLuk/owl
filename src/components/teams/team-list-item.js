import React from "react";
import {
    Collapse,
    // Container,
    Card,
    CardImg,
    CardTitle,
    CardText,
    // CardGroup,
    CardBody,
    CardLink
} from "reactstrap";

const TeamListItem = ({ team, onTeamSelect }) => {
    //  toggle() {
    //     this.setState({
    //         collapse: !this.state.collapse,
    //         // selectedTeam: this.props.teams[e.target.dataset.selected]
    //     });
    //     // console.log(this.props.teams);
    //     // console.log(e.target.dataset.selected);
    //     // console.log(this.state.selectedTeam.competitor)
    //     console.log(this.state.selectedTeam);
    //     // this.props.selectTeam();
    // }
    return (
        <div className="CardGroup-card">
            <Card className="card-team">
                <CardImg top width="100%" src={team.competitor.icon} />
                <CardBody>
                    <CardTitle className="font-weight-bold">
                        {team.competitor.name}
                    </CardTitle>
                    <CardText>{team.competitor.homeLocation}</CardText>
                </CardBody>
                <CardLink
                    onClick={() => onTeamSelect(team)}
                    // onClick={() => this.props.selectTeam(team)}
                    className="card-button card-link--withUnderlineAnimation">
                    View Roster
                </CardLink>
                <Collapse isOpen={team.collapse}>
                    {team.competitor.name}
                </Collapse>
            </Card>
        </div>
    );
};

export default TeamListItem;
