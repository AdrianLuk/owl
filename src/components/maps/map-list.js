import React from "react";

const MapList = props => {
    const mapItems = props.maps.map(map => {
        return <MapListItem />;
    });
    return (
        <div>
            <p>{mapItems}</p>
        </div>
    );
};

export default MapList;
