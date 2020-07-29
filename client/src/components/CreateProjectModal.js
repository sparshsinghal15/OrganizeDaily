import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { createProject } from '../actions/project';

export class createProjectModal extends Component {
	state = {
		isOpen: false,
		error: false,
		available: false
	};
	static propTypes = {
		createProject: PropTypes.func.isRequired,
		projects: PropTypes.object.isRequired
	};
	componentDidUpdate(prevProps, prevState) {
		const currentProjects = this.props.projects.currentProjects;
		let flag = 0;
		if (prevState.name !== this.state.name) {
			for (let i = 0; i < currentProjects.length; i++) {
				if (currentProjects[i].name === this.state.name) flag = 1;
				else flag = 0;
			}
			if (flag === 0) {
				this.setState({
					...this.state,
					available: true
				});
			} else if (flag === 1 || !this.state.name) {
				this.setState({
					...this.state,
					available: false
				});
			}
		}
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	onChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
			msg: true
		});
	};
	onSubmit = (event) => {
		event.preventDefault();

		const { name, description, deadline } = this.state;
		const newProject = { name, description, deadline };

		if (this.state.available) {
			this.setState({
				...this.state,
				msg: false
			});
			this.props.createProject(newProject);
			this.toggle();
		}
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
								{this.state.msg ? this.state.available ? (
									<FormText style={{ float: 'right' }} color="success">
										Available
									</FormText>
								) : (
									<FormText style={{ float: 'right' }} color="danger">
										"{this.state.name}" already exists
									</FormText>
								) : null}
								<Input
									onChange={this.onChange}
									type="text"
									name="name"
									id="Name"
									placeholder="Enter Project Name"
									required
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
									// required
								/>
							</FormGroup>
							<FormGroup>
								<Label for="deadline">Deadline</Label>
								<Input onChange={this.onChange} type="date" name="deadline" id="deadline" required />
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

const mapStateToProps = (state) => ({
	projects: state.projects
});

const mapDispatchToProps = { createProject };

export default connect(mapStateToProps, mapDispatchToProps)(createProjectModal);
