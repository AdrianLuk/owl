import React from "react";
import _ from "lodash";
import { CardGroup } from "reactstrap";
import MapListItem from "./map-list-item";

const MapList = props => {
    const maps = _.uniqBy(props.maps, "id");
    // console.log(maps);
    const mapItems = maps.map(map => {
        return (
            <MapListItem
                onMapSelect={props.onMapSelect}
                key={map.guid}
                map={map}
            />
        );
    });
    return (
        <div>
            <CardGroup>{mapItems}</CardGroup>
        </div>
    );
};

export default MapList;
