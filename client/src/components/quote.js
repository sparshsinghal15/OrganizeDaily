import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuote } from '../actions/quote';
import { Card, CardBody, CardText, Fade } from 'reactstrap';

class Quote extends Component {
	static propTypes = {
		getQuote: PropTypes.func.isRequired,
		quote: PropTypes.object.isRequired
	};
	componentWillMount() {
		this.props.getQuote();
	}
	render() {
		return (
			<div>
				{!this.props.quote.isLoading && this.props.quote.run ? (
					<Fade in={!this.props.quote.isLoading && this.props.quote.run} tag="h5" className="mt-3">
						<Card
							style={{
								boxShadow:
									'0px 0px 5px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.05)',
								padding: '1rem'
							}}
						>
							<CardBody>
								<CardText style={{ fontSize: '1.2rem', fontWeight: 400 }}>
									" {this.props.quote.data.quote.quoteText} "
								</CardText>
								<CardText
									style={{
										fontSize: '1rem',
										fontWeight: 300,
										width: '50%',
										textTransform: 'capitalize',
										display: 'inline-block'
									}}
								>
									Genre:{' '}
									<span style={{ fontWeight: 400 }}>{this.props.quote.data.quote.quoteGenre}</span>
								</CardText>
								<CardText
									style={{
										fontSize: '1rem',
										fontWeight: 300,
										width: '50%',
										textAlign: 'end',
										display: 'inline-block'
									}}
								>
									— <i>{this.props.quote.data.quote.quoteAuthor}</i>
								</CardText>
							</CardBody>
						</Card>
					</Fade>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	quote: state.quote
});

const mapDispatchToProps = {
	getQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
