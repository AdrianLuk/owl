import React, { Component } from "react";
import { fetchNews } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainHeader from "../common/headers/main-header";
import Footer from "../common/footers/main-footer";
import { Container } from "reactstrap";
import NewsList from "./news-list";
import "./news.css";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedNews: null };
    }
    componentDidMount() {
        // this.props.fetchNews();
        this.props.fetchNews();
        // console.log(this.props.news);
    }

    render() {
        if (!this.props.news) {
            return <div>loading</div>;
        } else {
            return (
                <div>
                    <MainHeader />
                    <h1>News Page</h1>
                    <Container>
                        <NewsList news={this.props.news} />
                    </Container>
                    <Footer />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        news: state.news,
        selectedNews: state.selectedNews
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNews: fetchNews }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);
