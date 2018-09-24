import React, { Component } from "react";
import MainHeader from "../common/headers/main-header";
import { fetchMaps } from "../../actions";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import "./maps.css";

class Maps extends Component {
    constructor(props) {
        super(props);
        this.renderMapList = this.renderMapList.bind(this);
        this.state = {
            selectedMap: null
        };
    }

    componentDidMount() {
        this.props.fetchMaps();
    }

    renderMapList() {
        // console.log(this.props.maps);
        const unique = _.uniqBy(this.props.maps, "id");
        console.log(unique);
        return unique.map(map => {
            return (
                <Col xs="12" md="4" key={map.guid}>
                    <img
                        className="img-fluid w-100"
                        src={map.thumbnail ? map.thumbnail : " "}
                        alt={map.thumbnail ? map.id : "No Picture Yet"}
                    />
                    <h1 className="h3">{map.name.en_US}</h1>
                </Col>
            );
        });
    }
    render() {
        return (
            <div>
                <MainHeader />
                <h1>Maps Page</h1>
                <Container>
                    <Row>{this.renderMapList()}</Row>
                </Container>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Maps);
