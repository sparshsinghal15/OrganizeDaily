import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { createProject } from '../actions/project';

export class createProjectModal extends Component {
	state = {
		isOpen: false
	};
	static propTypes = {
		createProject: PropTypes.func.isRequired
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
		const { name, description, deadline } = this.state;
		const newProject = { name, description, deadline };
		this.props.createProject(newProject);
		this.toggle();
	};
	render() {
		return (
			<div>
				<Button onClick={this.toggle} style={{ width: '100%' }} color="primary" outline>
					<i class="fa fa-plus" aria-hidden="true" /> &nbsp; Create New Project
				</Button>{' '}
				<Modal isOpen={this.state.isOpen} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Create Project</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="Name">Project Name</Label>
								<Input
									onChange={this.onChange}
									type="text"
									name="name"
									id="Name"
									placeholder="Enter Project Name"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="description">Description</Label>
								<Input
									onChange={this.onChange}
									type="textarea"
									name="description"
									id="description"
									placeholder="Enter Project Description"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="deadline">Deadline</Label>
								<Input onChange={this.onChange} type="date" name="deadline" id="deadline" />
							</FormGroup>
							<Button color="primary" block>
								Create
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { createProject };

export default connect(mapStateToProps, mapDispatchToProps)(createProjectModal);
