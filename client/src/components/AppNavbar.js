import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import './css/AppNavbar.css';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';

export default class AppNavbar extends Component {
	state = {
		isOpen: false
	};
	toggle = (state) => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() {
		return (
			<div
				style={{
					marginBottom: '2rem',
					boxShadow:
						'0px 0px 14px rgba(0, 0, 0, 0.8), 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.05)'
				}}
			>
				<Navbar color="dark" dark expand="md">
					<Container className="">
						<NavbarBrand href="/">Organize Daily</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/log">Log</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/schedule">Schedule</NavLink>
								</NavItem>
								<LoginModal />
								<RegisterModal />
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
