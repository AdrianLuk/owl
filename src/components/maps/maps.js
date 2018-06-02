import React, { Component } from "react";
import MainHeader from "../common/headers/main-header";
import { fetchMaps } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./maps.css";

class Maps extends Component {
    constructor(props) {
        super(props);
        this.renderMapList = this.renderMapList.bind(this);
    }

    componentDidMount() {
        this.props.fetchMaps();
    }

    renderMapList() {
        // console.log(this.props.maps);
        return this.props.maps.map(map => {
            return <li key={map.id}>{map.name.en_US}</li>;
        });
    }
    render() {
        return (
            <div>
                <MainHeader />
                <h1>Maps Page</h1>
                <ul>{this.renderMapList()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        maps: state.maps
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMaps: fetchMaps }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
