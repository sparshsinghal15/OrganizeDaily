import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Row, Col, Card, CardBody, CardText, Input, Badge, Form } from 'reactstrap';
import './css/projectComponent.scss';
import CreateProjectModal from './CreateProjectModal';

import { deleteProject, completedProject } from '../actions/project';

export class ProjectComponent extends Component {
	state = {
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
	};
	static propTypes = {
		projects: PropTypes.object.isRequired,
		deleteProject: PropTypes.func.isRequired,
		completedProject: PropTypes.func.isRequired
	};
	onChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	};
	onDeleteSubmit = (name, i, event) => {
		event.preventDefault();
		if (name === this.state.name) {
			this.props.deleteProject(i);
		}
	};
	onCompleteSubmit = (name, i, event) => {
		event.preventDefault();
		if (name === this.state.name) {
			this.props.completedProject(i);
			this.props.deleteProject(i);
		}
	};
	render() {
		var today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = this.state.months[today.getMonth()];
		const yyyy = today.getFullYear();
		today = dd + ' ' + mm + ' ' + yyyy;

		const currentProjects = this.props.projects.currentProjects;
		const completedProjects = this.props.projects.completedProjects;

		return (
			<div className="projectComponent">
				<h1>
					Current Projects{' '}
					<Badge style={{ fontSize: '1.2rem', marginLeft: '0.7rem' }} color="secondary">
						{currentProjects.length}
					</Badge>
					<span style={{ float: 'right' }}>{today}</span>
				</h1>
				<hr />
				{currentProjects.length !== 0 ? (
					<Row className="d-none d-md-flex" style={{ marginBottom: '1rem', textAlign: 'center' }}>
						<Col md="9">
							<Card style={{ backgroundColor: 'rgb(182, 0, 214)' }}>
								<CardBody style={{ padding: '0.5rem' }}>Project</CardBody>
							</Card>
						</Col>
						<Col md="3">
							<Card style={{ backgroundColor: 'rgb(182, 0, 214)' }}>
								<CardBody style={{ padding: '0.5rem' }}>Deadline</CardBody>
							</Card>
						</Col>
					</Row>
				) : null}

				{currentProjects.map((item, i) => (
					<Row className="currentProjectsRow" style={{ marginBottom: '0.5rem' }}>
						<Col md="9">
							<Card>
								<CardBody>
									<h2>{item.name}</h2>
									<CardText>{item.description}</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col md="3">
							<Card style={{ height: '50%' }}>
								<CardBody>
									<CardText
										style={{
											textAlign: 'center',
											fontWeight: 400,
											fontSize: '1.3rem'
										}}
									>
										{item.deadline}
									</CardText>
								</CardBody>
							</Card>
							<Card>
								<Input
									name="name"
									onChange={this.onChange}
									style={{ textAlign: 'center' }}
									placeholder="Enter Project Name"
								/>
								<Row
									className="submitCard"
									style={{ marginLeft: 0, marginRight: 0, wordWrap: 'normal' }}
								>
									<Col xs="6" style={{ padding: 0 }}>
										<Form onSubmit={this.onCompleteSubmit.bind(this, item.name, i)}>
											<Button
												color="primary"
												style={{ width: '100%', height: '100%', padding: '0.3rem' }}
												active={this.state.name === item.name}
											>
												Completed
											</Button>
										</Form>
									</Col>
									<Col xs="6" style={{ padding: 0 }}>
										<Form onSubmit={this.onDeleteSubmit.bind(this, item.name, i)}>
											<Button
												active={this.state.name === item.name}
												style={{
													color: 'white',
													width: '100%',
													height: '100%',
													padding: '0.3rem'
												}}
												color="danger"
											>
												Delete
											</Button>
										</Form>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				))}
				<h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
					<CreateProjectModal />
				</h2>

				<h1>
					Completed
					<Badge style={{ fontSize: '1.2rem', marginLeft: '0.7rem', float: 'right' }} color="secondary">
						{completedProjects.length}
					</Badge>
				</h1>
				<hr />
				<Row style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
					{completedProjects.map((item, i) => (
						<Col className="currentProjectsRow" style={{ marginBottom: '1.7rem' }} lg="3" md="4" xs="12">
							<Card>
								<CardBody>
									<h2>{item.name}</h2>
									<CardText>{item.description.substr(0, 120)} ...</CardText>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	projects: state.projects
});

const mapDispatchToProps = { deleteProject, completedProject };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
