import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';

export class RegisterModal extends Component {
	state = {
		modal: false
	};
	static propTypes = {
		prop: PropTypes
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};
	render() {
		return (
			<div>
				<div>
					<NavItem onClick={this.toggle}>
						<NavLink href="#">
							Register <i class="fa fa-user-plus" aria-hidden="true" />
						</NavLink>
					</NavItem>
					<Modal isOpen={this.state.modal} toggle={this.toggle}>
						<ModalHeader toggle={this.toggle}>Register</ModalHeader>
						<ModalBody>
							<Form>
								<FormGroup>
									<Label for="name">Name</Label>
									<Input type="name" name="name" id="name" placeholder="Name" />
								</FormGroup>
								<FormGroup>
									<Label for="Email">Email</Label>
									<Input type="email" name="email" id="Email" placeholder="Email" />
								</FormGroup>
								<FormGroup>
									<Label for="password">Password</Label>
									<Input type="password" name="password" id="password" placeholder="Password" />
								</FormGroup>
								<Button className="mt-4 mb-2" block outline color="secondary" onClick={this.toggle}>
									Register
								</Button>{' '}
							</Form>
						</ModalBody>
					</Modal>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
