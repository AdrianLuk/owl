import React, { Component } from "react";
import MainHeader from "../common/headers/main-header";
import Footer from "../common/footers/main-footer";
import { fetchMaps } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MapList from "./map-list";
import { Container, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import "./maps.css";

class Maps extends Component {
    constructor(props) {
        super(props);
        // this.renderMapList = this.renderMapList.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false,
            selectedMap: null
        };
    }

    componentDidMount() {
        this.props.fetchMaps();
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    renderMapList() {
        // console.log(this.props.maps);
    }
    render() {
        if (!this.state.selectedMap) {
            return (
                <div>
                    <MainHeader />
                    <h1>Maps</h1>{" "}
                    <Container>
                        <MapList
                        maps={this.props.maps}
                        onClick={this.toggle}
                        onMapSelect={selectedMap =>
                            this.setState({
                                selectedMap: selectedMap,
                                modal: !this.state.modal
                            })
                        }
                    />
                    </Container>
                    <Footer />
                </div>
            );
        }
        return (
            <div>
                <MainHeader />
                <h1>Maps Page</h1>
                <Container>
                    <MapList
                        maps={this.props.maps}
                        onClick={this.toggle}
                        onMapSelect={selectedMap =>
                            this.setState({
                                selectedMap: selectedMap,
                                modal: !this.state.modal
                            })
                        }
                    />
                    <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.modal}
                        toggle={this.toggle}>
                        <span onClick={this.toggle} className="modal-close">
                            <span className="fas fa-times" />
                        </span>
                        <div className="modal-border">
                            <ModalHeader>
                                <span>{this.state.selectedMap.name.en_US}</span>
                            </ModalHeader>
                            <ModalBody>
                                <section className="TeamRoster">
                                    <div className="mx-auto">
                                        <img
                                            className=" img-fluid"
                                            src={
                                                this.state.selectedMap.thumbnail
                                            }
                                            alt={
                                                this.state.selectedMap
                                                    .name.en_US}
                                        />
                                        
                                    </div>
                                    <Button
                                        color="link"
                                        onClick={this.toggle}
                                        className="TeamRoster-close">
                                        <span className="button-text">
                                            Close
                                        </span>
                                    </Button>
                                </section>
                            </ModalBody>
                        </div>
                    </Modal>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        maps: state.maps,
        selectedMap: state.selectedMap
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMaps: fetchMaps }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Maps);
