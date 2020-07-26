import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Row, Col, Card, CardText } from 'reactstrap';

class ActivitiesComponent extends Component {
	state = {
		items: [ { name: 'Web Development' }, { name: 'Web Development' }, { name: 'Web Development' } ]
	};
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div>
				<h1 style={{ color: 'white', fontWeight: 600, fontSize: '2min' }}>Activities</h1>
				<Form />
				<Row>
					<Col>
						{this.state.items.map((item) => (
							<Card style={{ marginBottom: '0.5rem', padding: '0.5rem' }}>
								<CardText>{item.name}</CardText>
							</Card>
						))}
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesComponent);
