import React, { Component } from "react";
import MainHeader from "../common/headers/main-header";
import Footer from "../common/footers/main-footer";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
// import { fetchTeams } from "../../actions";
import { OWL_LOGO } from "../common/icons/general-icons";
import playersProfiles from "../common/images/players-profiles.jpg";
import YouTube from "react-youtube";
import "./home.css";

class Home extends Component {
    componentDidMount() {}
    _onReady(event) {
        event.target.mute();
        event.target.setPlaybackRate(0.5);
        // console.log(event.target);
        event.target.playVideo();
    }
    render() {
        const opts = {
            height: "800",
            width: "100%",
            playerVars: {
                autoplay: 1,
                loop: 1,
                showinfo: 0,
                disablekb: 1,
                modestbranding: 1,
                playsinline: 1,
                fs: 0,
                rel: 0,
                mute: 1,
                // vpr: "0.5",
                controls: 0
            }
        };
        // video url = https://www.youtube.com/watch?v=OFHpK627XkI ;
        return (
            <div>
                <MainHeader />

                <Jumbotron
                    fluid
                    className="Jumbotron Jumbotron-hero--full-width">
                    <YouTube
                        id="youtube-video"
                        videoId="OFHpK627XkI"
                        opts={opts}
                        onReady={this._onReady}
                    />
                    <Container className="Jumbotron-text">
                        <h1>
                            <span className="Title-logo">{OWL_LOGO}</span>
                            Overwatch League
                        </h1>
                        <p className="lead Text-intro">
                            Hi I'm Adrian Luk. This is my rendition of the
                            official Overwatch League's website using React.
                        </p>
                    </Container>
                </Jumbotron>
                <Container>
                    <article className="Article">
                        <h2 className="Article-title">About Me</h2>
                        <p className="Article-text">
                            I'm a full stack web developer from Toronto, Canada.
                            I'm building this app as a way to practice my skills
                            and discover the capabilities of React and other
                            exciting new technologies. I am putting some of my
                            own personal touch on it but generally it is
                            modelled after the official site. Feel free to check
                            out some of my other projects at{" "}
                            <a href="http://adrianluk.com">Adrianluk.com</a>. If
                            you'd like to work together or have any questions,
                            email me at{" "}
                            <a href="mailto:aluk618@gmail.com">
                                aluk618@gmail.com
                            </a>
                            .
                        </p>
                    </article>
                </Container>
                <article className="Article Article-bg--white">
                    <Container>
                        <h2 className="Article-title">
                            What is the Overwatch League?
                        </h2>
                        <p className="Article-text">
                            The Overwatch League is the first major global
                            esports league with city-based teams and is designed
                            to celebrate the best of the best in the hit
                            Blizzard Entertainment title Overwatch. The
                            Overwatch League aims to follow the model of
                            traditional North American professional sports,
                            using a set of permanent teams and regular season
                            play, rather than the use of promotion and
                            relegation used commonly in other eSports leagues.
                            Each team franchise is backed by an owner, and
                            players that are signed onto the team are assured a
                            minimum annual salary, benefits, and a portion of
                            winnings and revenue-sharing based on how that team
                            performs in the season.
                        </p>
                    </Container>
                </article>
                <Container>
                    <article className="Article">
                        <Row>
                            <Col
                                xs="12"
                                md={{ size: 6, order: 2 }}
                                className="Article-image">
                                <img
                                    className="img-fluid"
                                    src="https://d2y4mhrku00tr3.cloudfront.net/images/pages/about/team-logos-9a5074f051d701b856633aa45f8877aecf5c2204fe2394280f7c60b9690e2f35e7684d5cf17c62a19a9ffaf7a28e13678d8900ad9dbfe8dfe677867374394013.png"
                                    alt="Overwatch League Team Logos"
                                />
                            </Col>
                            <Col xs="12" md="6" className="Article-content">
                                <h2 className="Article-title">The Teams</h2>
                                <p className="Article-text">
                                    The Overwatch League’s teams are permanent
                                    franchises representing major cities across
                                    the globe. The Atlantic and Pacific
                                    Divisions, comprising six teams each, share
                                    a fierce hunger for the Overwatch League
                                    championship, as well as for the USD $3.5
                                    million in performance bonuses at stake in
                                    the inaugural season.
                                </p>
                                <LinkContainer to="/teams">
                                    <Button
                                        outline
                                        color="info"
                                        size="lg"
                                        className="Article-cta">
                                        View Teams
                                    </Button>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </article>
                </Container>
                <article className="Article Article-bg--white">
                    <Container>
                        <Row>
                            <Col
                                xs="12"
                                md={{ size: 6, order: 2 }}
                                className="Article-image">
                                <img
                                    className="img-fluid"
                                    src={playersProfiles}
                                    alt="Overwatch League Players"
                                />
                            </Col>
                            <Col xs="12" md="6" className="Article-content">
                                <h2 className="Article-title">The Players</h2>
                                <p className="Article-text mb-2">
                                    With a USD $50,000 minimum base salary,
                                    healthcare and retirement savings plans, and
                                    housing provided during the season, the
                                    Overwatch League's pro players are able to
                                    pursue a sustainable career that celebrates
                                    their passion, dedication, and skill.
                                </p>
                                <p className="Article-text">
                                    Meet the next generation of esports
                                    superstars.
                                </p>
                                <LinkContainer to="/players">
                                    <Button
                                        outline
                                        color="info"
                                        size="lg"
                                        className="Article-cta">
                                        View Players
                                    </Button>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Container>
                </article>
                <Footer />
            </div>
        );
    }
}

export default Home;
