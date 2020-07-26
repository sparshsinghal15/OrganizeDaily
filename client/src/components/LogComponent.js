import React, { Component } from 'react';
import BoredComponent from './Bored';
import { Row, Col } from 'reactstrap';

export default class LogComponent extends Component {
	render() {
		return (
			<div
				style={{
					background: 'rgba(255, 255, 255, 0.2)',
					padding: '2vmin',
					height: '80vh',
					borderRadius: '10px'
				}}
			>
				<Row>
					<Col sm="6" md="4" lg="3">
						<BoredComponent />
					</Col>
				</Row>
			</div>
		);
	}
}
