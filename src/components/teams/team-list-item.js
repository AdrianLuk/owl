import React from "react";
import {
    // Collapse,
    // Container,
    Card,
    CardImg,
    CardTitle,
    CardText,
    // CardGroup,
    CardBody,
    CardLink
    // Modal
} from "reactstrap";

const TeamListItem = ({ team, onTeamSelect }) => {
    return (
        <div className="CardGroup-card">
            <Card className="card-team">
                <CardLink
                    className="card-link--withUnderlineAnimation p-0"
                    href={`https://overwatchleague.com/teams/${
                        team.competitor.id
                    }`}>
                    <div className="card-logo">
                    <CardImg top width="100%" src={team.competitor.icon} />
                    </div>
                    <CardBody>
                        <CardTitle className="font-weight-bold">
                            {team.competitor.name}
                        </CardTitle>
                        <CardText>{team.competitor.homeLocation}</CardText>
                    </CardBody>
                </CardLink>
                <CardLink
                    onClick={() => onTeamSelect(team)}
                    // onClick={() => this.props.selectTeam(team)}
                    className="card-bottom card-button card-link--withUnderlineAnimation">
                    View Roster
                </CardLink>
            </Card>
        </div>
    );
};

export default TeamListItem;
