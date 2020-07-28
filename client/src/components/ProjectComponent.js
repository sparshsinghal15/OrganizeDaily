import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Row, Col, Card, CardBody, CardText, Input, Badge } from 'reactstrap';
import './css/projectComponent.scss';
import CreateProjectModal from './CreateProjectModal';

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
		projects: PropTypes.object.isRequired
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
								<Input style={{ textAlign: 'center' }} placeholder="Enter Project Name" />
								<Row style={{ marginLeft: 0, marginRight: 0 }}>
									<Button color="primary" style={{ width: '50%' }}>
										Completed
									</Button>

									<Button style={{ color: 'white', width: '50%' }} color="danger">
										Delete
										{/* <i class="fa fa-trash-o" aria-hidden="true" /> */}
									</Button>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
