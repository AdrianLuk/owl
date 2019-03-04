import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardLink } from "reactstrap";

const MapListItem = ({ map, onMapSelect }) => {
    if (map.thumbnail) {
        return (
            <div className="CardGroup-card">
                <Card className="card-team">
                    <div className="card-logo">
                        <CardImg top width="100%" src={map.thumbnail} />
                    </div>
                    <CardBody>
                        <CardTitle className="font-weight-bold mb-0">
                            {map.name.en_US}
                        </CardTitle>
                    </CardBody>
                    <CardLink
                        onClick={() => onMapSelect(map)}
                        className="card-bottom card-button card-link--withUnderlineAnimation">
                        <span>
                            View Map Details{" "}
                            <span className="ml-2 far fa-clone" />
                        </span>
                    </CardLink>
                </Card>
            </div>
        );
    } else {
        return false;
    }
    // return (
    //     <div className="CardGroup-card">
    //         <Card className="card-team">

    //                 <div className="card-logo">
    //                     <CardImg top width="100%" src={team.competitor.icon} />
    //                 </div>
    //                 <CardBody>
    //                     <CardTitle className="font-weight-bold">
    //                         {team.competitor.name}
    //                     </CardTitle>
    //                     <CardText>{team.competitor.homeLocation}</CardText>
    //                 </CardBody>
    // <CardLink
    //     onClick={() => onMapSelect(map)}
    //     // onClick={() => this.props.selectTeam(team)}
    //     className="card-bottom card-button card-link--withUnderlineAnimation">
    //     <span>
    //         View Roster <span className="ml-2 far fa-clone" />
    //     </span>
    // </CardLink>
    //         </Card>
    //     </div>
    // );
};

export default MapListItem;
