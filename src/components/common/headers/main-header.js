import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from 'react-router-dom';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink
} from "reactstrap";
import "./main-header.css";

export default class MainHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Container>
                <Navbar color="dark" dark expand="lg">
                    <LinkContainer to="/">
                        <NavbarBrand>Overwatch League</NavbarBrand>
                    </LinkContainer>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <LinkContainer to="/teams">
                                <NavLink>Teams</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/players">
                                <NavLink>Players</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/schedule">
                                <NavLink>Schedule</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/standings">
                                <NavLink>Standings</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/stats">
                                <NavLink disabled>Stats</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/videos">
                                <NavLink>Videos</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/news">
                                <NavLink>News</NavLink>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}
