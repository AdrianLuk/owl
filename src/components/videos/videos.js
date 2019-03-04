import React, { Component } from "react";
import { fetchVideos } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainHeader from "../common/headers/main-header";

class Videos extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchVideos();
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <MainHeader />
                <h1>Videos Page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
        // selectedMap: state.selectedMap
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideos: fetchVideos }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Videos);
