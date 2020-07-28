import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog } from '../actions/logs';

class LogShowModal extends Component {
	static propTypes = {
		deleteLog: PropTypes.func.isRequired
	};
	onClick = (i) => {
		this.props.deleteLog(i);
		this.props.toggle();
	};
	render() {
		return (
			<div>
				<Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
					<ModalHeader toggle={this.props.toggle}>{this.props.mood}</ModalHeader>
					<ModalBody>
						{this.props.desc}
						<br />
						<hr />
						<div>
							<span style={{ fontWeight: 600, textTransform: 'uppercase' }}>
								{this.props.date + ' ' + this.props.year}
							</span>
							<Button
								style={{ float: 'right' }}
								color="danger"
								onClick={this.onClick.bind(this, this.props.i)}
							>
								Delete
							</Button>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	deleteLog
};

export default connect(mapStateToProps, mapDispatchToProps)(LogShowModal);
