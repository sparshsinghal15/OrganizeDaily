import React, { Component } from 'react';
import QuoteComponent from './Quote';
import { Row, Col, Card, CardImg, Container, Button } from 'reactstrap';
import './css/home.scss';
import FooterComponent from './FooterComponent';

import schedule from '../assets/images/schedule.jpg';
import diary from '../assets/images/diary.jpg';
import project from '../assets/images/project.jpg';

export default class HomeComponent extends Component {
	render() {
		return (
			<div>
				<Container>
					<QuoteComponent />

					<div className="home-component" style={{ color: 'white', marginTop: '5vmin' }}>
						<h1>Want to Organize your Daily life?</h1>

						<Row>
							<Col xs="12" md="6">
								<Card style={{ border: 'none', height: '100%' }}>
									<CardImg style={{ height: '100%', borderRadius: '15px' }} src={schedule} />
								</Card>
							</Col>
							<Col xs="12" md="6">
								<h2 className="h2first">
									<a href="/schedule">Schedule your day for maximum productiivity</a>
								</h2>
								<p>
									Make a prefect schedule for the day. Just select the time at which your day starts,
									the activity from your saved activities list and the duration for which you wish to
									perform the activity. You can update your activites list according to the activites
									you perform more often.
								</p>
							</Col>
						</Row>

						<Row className="flex-md-row-reverse">
							<Col xs="12" md="6" className="colSelected">
								<CardImg style={{ height: '100%', borderRadius: '15px' }} src={diary} />
							</Col>
							<Col xs="12" md="6">
								<h2 className="h2second">
									<a href="/log">Your Personal Diary</a>
								</h2>
								<p>
									A place to confess your struggles and fears without judgment or punishment. It
									likely feels good to get all of those thoughts and feelings out of your head and
									down on paper. It's simply writing down your thoughts and feelings to understand
									them more clearly. And if you struggle with stress, depression, or anxiety, keeping
									a journal is a great idea.
								</p>
							</Col>
						</Row>

						<Row>
							<Col xs="12" md="6" className="colSelected">
								<CardImg style={{ height: '100%', borderRadius: '25px' }} src={project} />
							</Col>
							<Col xs="12" md="6">
								<h2 className="h2third">
									<a href="/project">Organize your Projects</a>
								</h2>

								<p>
									Does it happen to you that so you have many projects at the same time and after a
									while you loose track of them? Well the problem is solved here. Keep a list of the
									projects you are working on, with the deadline and if the project is approaching its
									deadline we will notify you.
								</p>
							</Col>
						</Row>
						<h3 style={{ textAlign: 'center', marginTop: '3rem' }}>
							<a href="#navbarLink">
								<Button style={{ borderRadius: '2rem' }} color="primary" size="lg">
									Register for Free Now
								</Button>
							</a>
						</h3>
					</div>
				</Container>

				<FooterComponent />
			</div>
		);
	}
}
