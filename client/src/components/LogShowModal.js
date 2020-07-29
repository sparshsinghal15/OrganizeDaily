import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog } from '../actions/logs';

class LogShowModal extends Component {
	static propTypes = {
		deleteLog: PropTypes.func.isRequired,
		logs: PropTypes.func.isRequired
	};
	onClick = (i) => {
		this.props.deleteLog(i);
		this.props.toggle();
	};
	render() {
		const note = this.props.logs.notes[this.props.i];
		return (
			<div>
				<Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
					<ModalHeader toggle={this.props.toggle}>{note.title}</ModalHeader>
					<ModalBody>
						{note.entry}
						<br />
						<hr />
						<div>
							<span style={{ fontWeight: 600, textTransform: 'uppercase' }}>
								{note.date + ' ' + note.year}
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

const mapStateToProps = (state) => ({
	logs: state.logs
});

const mapDispatchToProps = {
	deleteLog
};

export default connect(mapStateToProps, mapDispatchToProps)(LogShowModal);
