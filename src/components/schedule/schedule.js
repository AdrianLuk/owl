import React, { Component } from 'react';
import MainHeader from '../common/headers/main-header';
import { fetchSchedule } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.renderSchedule = this.renderSchedule.bind(this);
    }

    componentDidMount() {
        this.props.fetchSchedule();
    }

    renderSchedule() {
        console.log(this.props.schedule);
    }

    render() {
        return (
            <div>
                <MainHeader />
                <h1>Schedule page</h1>
                {this.renderSchedule()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        schedule: state.schedule
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { fetchSchedule: fetchSchedule }, dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);