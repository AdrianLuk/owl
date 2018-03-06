import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { connect } from 'react-redux';


class CollapsePanel extends Component {
    componentDidMount() {
        this.props.selectTeam();
    }


    render() {
        return (
            <div>
                <h2>{this.props.team.name}</h2>
                console.log(hi)
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.activeTeam
    };
}

export default connect(mapStateToProps)(CollapsePanel);