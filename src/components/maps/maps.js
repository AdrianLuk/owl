import React, { Component } from "react";
import MainHeader from "../common/headers/main-header";
import { fetchMaps } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './maps.css';

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
        const maps = this.props.maps.map(map => {
            return (
                <a href="javascript:void(0)">{map.name}</a>
            );
        });
    }
    render() {
        return (
            <div>
                <MainHeader />
                <h1>Maps Page</h1>
                {this.renderMapList()}
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
    return bindActionCreators(
        { fetchMaps: fetchMaps }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
