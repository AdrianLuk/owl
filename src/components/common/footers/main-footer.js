import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";

const Footer = () => {
    const theDate = new Date();
    return (
        <footer className="Footer">
            <Container className="Footer-container">
                <Row className="text-center">
                    <Col xs="12" className="mx-auto">
                        <h6 className="Footer-heading">Where To Find Me</h6>
                        <p className="Footer-social">
                            <span className="fas fa-globe Footer-icon" />{" "}
                            <a href="http://adrianluk.com">adrianluk.com</a>
                        </p>
                        <p className="Footer-social">
                            <span className="fas fa-envelope Footer-icon" />{" "}
                            <a href="mailto:aluk618@gmail.com">
                                aluk618@gmail.com
                            </a>
                        </p>
                        <p className="Footer-social">
                            <span className="fab fa-github Footer-icon" />{" "}
                            <a href="http://github.com/AdrianLuk">AdrianLuk</a>
                        </p>
                    </Col>
                    <Col
                        xs="12"
                        className="Footer-copyright--aligned-bottom mx-auto">
                        <p className="Footer-copyright ">
                            <span className="far fa-copyright Footer-icon Footer-icon--copyright" />{" "}
                            {theDate.getFullYear()} Adrian Luk
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
