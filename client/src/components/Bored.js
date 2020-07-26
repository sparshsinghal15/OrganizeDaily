import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getBored } from '../actions/bored';

import { Button, Card, CardBody, Collapse, CardTitle, CardLink, CardSubtitle, Spinner } from 'reactstrap';
import './css/bored.css';

class BoredComponent extends Component {
	state = {
		load: false
	};
	static propTypes = {
		bored: PropTypes.object,
		getBored: PropTypes.func.isRequired
	};
	onClick = () => {
		this.setState({
			load: true
		});
		this.props.getBored();
	};
	render() {
		const data = { ...this.props.bored.data };
		return (
			<div>
				<Button style={{ marginBottom: '1rem', width: '100%' }} color="primary" onClick={this.onClick}>
					Bored ?
				</Button>
				{this.props.bored.loading ? (
					<Spinner style={{ width: '2.1rem', height: '2.1rem', margin: 'auto' }} />
				) : null}
				<Collapse isOpen={!this.props.bored.loading && this.state.load}>
					<Card>
						<CardBody>
							<CardTitle>
								<span style={{ fontWeight: 600 }}>Activity:</span> {data.activity}
							</CardTitle>
							<CardSubtitle>
								<span style={{ fontWeight: 600 }}>Type:</span>{' '}
								<span style={{ textTransform: 'capitalize' }}>{data.type}</span>
							</CardSubtitle>
							<CardLink>{data.CardLink}</CardLink>
						</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	bored: state.bored
});

const mapDispatchToProps = {
	getBored
};

export default connect(mapStateToProps, mapDispatchToProps)(BoredComponent);
