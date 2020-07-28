import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BoredComponent from './Bored';
import CreateLogModal from './CreateLogModal';
import LogShowModalComponent from './LogShowModal';
import { Row, Col, Card, CardBody, CardText, Badge } from 'reactstrap';
import './css/logComponent.scss';

class LogComponent extends Component {
	state = {
		showIsOpen: false
	};
	static propTypes = {
		logs: PropTypes.object.isRequired
	};
	onClickShowLogToggle = () => {
		this.setState({
			...this.state,
			showIsOpen: !this.state.showIsOpen
		});
	};

	render() {
		const notes = this.props.logs.notes;
		return (
			<div
				className="logComponent"
				style={{
					// background: 'rgba(255, 255, 255, 0.2)',
					padding: '2vmin',
					height: '80vh',
					borderRadius: '10px'
				}}
			>
				<Row>
					<Col sm="6" md="8" lg="9">
						<h1>
							My Diary<Badge style={{ fontSize: '1.2rem', marginLeft: '0.7rem' }} color="secondary">
								{notes.length}
							</Badge>
							<span style={{ float: 'right' }}>
								<CreateLogModal />
							</span>
						</h1>
						<hr />
						<Row style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
							{notes.length !== 0 ? (
								notes.map((item, i) => (
									<Col style={{ marginBottom: '1.7rem' }} lg="4" md="6" xs="12">
										<Card onClick={this.onClickShowLogToggle}>
											<CardBody>
												<h2>{item.date}</h2>
												<CardText>{item.entry.substr(0, 120)} ...</CardText>
											</CardBody>
										</Card>
										<LogShowModalComponent
											toggle={this.onClickShowLogToggle}
											isOpen={this.state.showIsOpen}
											date={item.date}
											year={item.year}
											desc={item.entry}
											mood={item.title}
											i={i}
										/>
									</Col>
								))
							) : null}
						</Row>
					</Col>
					<Col className="extrasCol" sm="6" md="4" lg="3">
						<BoredComponent />
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	logs: state.logs
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LogComponent);
