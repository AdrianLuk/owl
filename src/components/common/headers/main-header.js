import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './main-header.css';

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
                        <Nav className="ml-auto" navbar>
                            <LinkContainer className="nav-link" to="/teams">
                                <NavLink>Teams</NavLink>
                            </LinkContainer>
                            <LinkContainer className="nav-link" to="/players">
                                <NavLink>Players</NavLink>
                            </LinkContainer>
                            <LinkContainer className="nav-link" to="/schedule">
                                <NavLink>Schedule</NavLink>
                            </LinkContainer>
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Option 3</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}