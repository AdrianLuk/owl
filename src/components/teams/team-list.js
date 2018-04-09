import React from "react";
import { CardGroup } from "reactstrap";
import TeamListItem from "./team-list-item";

const TeamList = props => {
    const teamItems = props.teams.map(team => {
        return (
            <TeamListItem
                onTeamSelect={props.onTeamSelect}
                key={team.competitor.id}
                team={team}
            />
        );
    });
    return <CardGroup>{teamItems}</CardGroup>;
};

export default TeamList;
