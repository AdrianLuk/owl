import React, { Component } from "react";
// import { Collapse } from 'reactstrap';
// import { connect } from "react-redux";

// class CollapsePanel extends Component {
//     // componentDidMount() {
//     //     this.props.selectTeam();
//     // }

//     render() {
//         // console.log(this.props.activeTeam)
//         return (
//             <div>
//                 <h2>{this.props.name}</h2>
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         team: state.activeTeam
//     };
// }

// export default connect(mapStateToProps)(CollapsePanel);
import {
    Collapse,
    Container,
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody,
    CardLink
} from "reactstrap";

const CollapsePanel = (props) => {
    return (
        <div>
            {props.team.name}
        </div>
    );
};

export default CollapsePanel;