import React, { Component } from "react";
import { fetchPlayers } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Griddle, { plugins } from "griddle-react";
import MainHeader from "../common/headers/main-header";

class Players extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
        console.log(this.props.players);
    }
    render() {
        return (
            <div>
                <MainHeader />
                <h1>Players page</h1>
                <Griddle
                    data={this.props.players}
                    plugins={[plugins.LocalPlugin]}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        players: state.players
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPlayers: fetchPlayers }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players);
