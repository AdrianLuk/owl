import React, { Component } from "react";
import { fetchNews } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainHeader from "../common/headers/main-header";
import { Container, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import NewsList from "./news-list";
import "./news.css";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // this.props.fetchNews();
        this.props.fetchNews();
        console.log(this.props.news);
    }

    render() {
        return (
            <div>
                <MainHeader />
                <h1>News Page</h1>
                <NewsList news={this.props.news} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news
        // selectedMap: state.selectedMap
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNews: fetchNews }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);
