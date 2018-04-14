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
    CardLink,
    Modal
} from "reactstrap";

const TeamListItem = ({ team, onTeamSelect }) => {
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
            </Card>
        </div>
    );
};

export default TeamListItem;
