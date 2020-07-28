import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Row, Col, Card, CardText, Input, Button } from 'reactstrap';
import './css/activities.scss';

import { createLocalActivity } from '../actions/localSchedule';
import { createActivity, deleteActivity } from '../actions/activities';

class ActivitiesComponent extends Component {
	state = {
		activity: null
		// deleteButton: false
	};
	static propTypes = {
		activity: PropTypes.object.isRequired,
		createLocalActivity: PropTypes.func.isRequired,
		createActivity: PropTypes.func.isRequired,
		deleteActivity: PropTypes.func.isRequired
	};
	onClick = (activity) => {
		this.props.createLocalActivity(activity);
	};
	onChange = (event) => {
		this.setState({
			activity: event.target.value
		});
	};
	onSubmit = (event) => {
		event.preventDefault();
		this.props.createActivity(this.state.activity);
	};
	onClickDelete = (i, event) => {
		event.preventDefault();
		this.props.deleteActivity(i);
	};

	render() {
		return (
			<div className="activities-component" style={{ marginBottom: '2rem' }}>
				<h1 style={{ color: 'white', fontWeight: 600, fontSize: '2min' }}>Activities</h1>
				<Form onSubmit={this.onSubmit} style={{ marginBottom: '3vmin' }}>
					<Input
						onChange={this.onChange}
						style={{ height: '3rem', textAlign: 'center' }}
						type="text"
						placeholder="Activity"
					/>
					<Button color="primary" size="lg" block>
						Create Activity
					</Button>
				</Form>
				<Row>
					<Col>
						{this.props.activity.items.map((item, i) => (
							<Card
								onClick={this.onClick.bind(this, item.name)}
								className="textCard"
								style={{ marginBottom: '0.5rem', padding: '0.5rem' }}
							>
								<Button onClick={this.onClickDelete.bind(this, i)} className="trash" color="danger">
									<i style={{ color: 'white' }} class="fa fa-trash-o" aria-hidden="true" />
								</Button>
								<CardText>{item.name}</CardText>
							</Card>
						))}
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	activity: state.activities
});

const mapDispatchToProps = {
	createLocalActivity,
	createActivity,
	deleteActivity
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesComponent);
