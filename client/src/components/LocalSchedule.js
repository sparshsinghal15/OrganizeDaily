import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card, CardText, Input, Form, Button } from 'reactstrap';
import { startingTimeChange, onChangeMin, onChangeHr } from '../actions/localSchedule'
import './css/localSchedule.scss';

const cardStyle = {
	padding: '0.5rem',
	textAlign: 'center',
	backgroundColor: 'rgba(52, 134, 235, 0.7)',
	color: 'white'
};

class LocalScheduleComponent extends Component {
	static propTypes = {
		schedule: PropTypes.object.isRequired,
		startingTimeChange: PropTypes.func.isRequired,
		onChangeMin: PropTypes.func.isRequired,
		onChangehr: PropTypes.func.isRequired

	};
	updateRemainingTime = () => {};
	onChangehr = (i, event) => {
		this.props.onChangeHr(i, event.target.value)
	};
	onChangeMin = (i, event) => {
		this.props.onChangeMin(i, event.target.value)
	};
	onStartingTimeChange = (event) => {
		this.props.startingTimeChange(event.target.value)
	};
	
	;
	render() {
		console.log(this.props.schedule);
		return (
			<div className="localSchedule">
				<h1
					style={{
						fontWeight: 300,
						fontSize: '1.5rem',
						marginBottom: '2rem',
						color: 'rgba(255, 255, 255, 0.8)'
					}}
				>
					Time Remaining: {''}
					<span style={{ fontWeight: 500, color: 'white' }}>{this.props.schedule.hr}</span> Hr{'  '}
					<span style={{ fontWeight: 500, color: 'white' }}>{this.props.schedule.min}</span> Min
				</h1>
				<Form>
					<Row className="justify-content-center" style={{ marginBottom: '1rem' }}>
						<Col xs="4">
							<h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 400 }}>Starting Time</h1>
						</Col>
						<Col xs="5" md="4">
						<Input style={{ height: '100%'}}
							placeholder="Time"
							type="time"
							onChange={this.onStartingTimeChange}
						/>
						</Col>
					</Row>
					<Row className="justify-content-around flex-nowrap" style={{ marginBottom: '2vmin' }}>
						<Col style={{ padding: 0 }} xs="4">
							<Card style={cardStyle}>
								<CardText>Duration</CardText>
							</Card>
						</Col>
						<Col className=" pr-3" xs="6">
							<Card style={cardStyle}>
								<CardText>Activity</CardText>
							</Card>
						</Col>
						<Col style={{ padding: 0 }} xs="3">
							<Card style={cardStyle}>
								<CardText>Time</CardText>
							</Card>
						</Col>
					</Row>
					{this.props.schedule.items.map((item, i) => {
						return (
							<Row
								className="justify-content-around flex-nowrap"
								style={{
									marginBottom: '1vmin'
								}}
							>
								<Col style={{ padding: 0, paddingRight: '1vmin' }} xs="2">
									<Input
										style={{
											height: '100%'
										}}
										placeholder="H"
										min={0}
										max={24}
										type="number"
										step="1"
										onChange={this.onChangehr.bind(this, i)}
									/>
								</Col>
								<Col style={{ padding: 0 }} xs="2">
									<Input
										style={{
											height: '100%'
										}}
										placeholder="M"
										min={0}
										max={59}
										type="number"
										step="5"
										onChange={this.onChangeMin.bind(this, i)}
									/>
								</Col>

								<Col className=" pr-3" xs="6">
									<Card className="textCard">
										<CardText style={{ textAlign: 'start' }}>
											<Button className="trash" color="danger">
												<i
													style={{ color: 'white' }}
													class="fa fa-trash-o"
													aria-hidden="true"
												/>
											</Button>
											<span
												style={{
													margin: '0.5rem',
													textAlign: 'center',
													display: 'inline-block',
													width: '75%'
												}}
											>
												{item.name}
											</span>
										</CardText>
									</Card>
								</Col>
								 
									<Col style={{ padding: 0 }} xs="2">
										<Card style={{ padding: '0.5rem', height: "100%" }}>
											<CardText>{item.time}</CardText>
										</Card>
									</Col>
								
								
								<Col style={{ padding: 0, width: '10%' }} xs="1">
									<Card
										style={{
											padding: '0.5rem',
											backgroundColor: 'rgba(130, 127, 126, 0.8)',
											color: 'white',
											height: "100%"
										}}
									>
										<CardText>{item.interval}</CardText>
									</Card>
								</Col>
							</Row>
						);
					})}
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	schedule: state.localSchedule
});

const mapDispatchToProps = {
	startingTimeChange,
	onChangeMin,
	onChangeHr
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalScheduleComponent);
