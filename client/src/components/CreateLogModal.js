import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { createLog } from '../actions/logs';

export class createProjectModal extends Component {
	state = {
		isOpen: false
	};
	static propTypes = {
		createLog: PropTypes.func.isRequired
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	onChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	};
	onSubmit = (event) => {
		event.preventDefault();
		const { title, log } = this.state;
		const newLog = {
			title,
			log
		};
		this.props.createLog(newLog);
		this.toggle();
	};
	render() {
		return (
			<div>
				<Button onClick={this.toggle} style={{ borderRadius: '5rem' }} color="primary" size="md">
					Create New Log
				</Button>
				<Modal isOpen={this.state.isOpen} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Diary Entry</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="name">Title</Label>
								<Input
									onChange={this.onChange}
									type="text"
									name="title"
									id="name"
									placeholder="Title / Mood"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="log">Entry</Label>
								<Input
									onChange={this.onChange}
									type="textarea"
									name="log"
									id="log"
									placeholder="My Awesome Day"
								/>
							</FormGroup>
							<FormGroup>
								<Button color="primary" block>
									Create
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { createLog };

export default connect(mapStateToProps, mapDispatchToProps)(createProjectModal);
