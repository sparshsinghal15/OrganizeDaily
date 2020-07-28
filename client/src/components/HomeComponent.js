import React, { Component } from 'react';
import QuoteComponent from './Quote';
import { Row, Col, Card, CardImg, Container, Button } from 'reactstrap';
import './css/home.scss';
import FooterComponent from './FooterComponent';

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
									<CardImg
										style={{ height: '100%' }}
										src="https://images.tmcnet.com/tmc/misc/articles/image/2018-aug/bigstock--animated-schedule-supersize.jpg"
									/>
								</Card>
							</Col>
							<Col xs="12" md="6">
								<h2 className="h2first" style={{ color: 'rgb(166, 162, 154)' }}>
									<a href="/schedule">Schedule your day for maximum productiivity</a>
								</h2>
								<p style={{ color: 'rgb(27, 119, 194)' }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap into electronic
								</p>
							</Col>
						</Row>

						<Row className="flex-md-row-reverse">
							<Col xs="12" md="6" className="colSelected">
								<CardImg
									style={{ height: '100%', borderRadius: '15px' }}
									src="https://image.freepik.com/free-photo/white-blank-open-notepad-book-concept-background-with-office-supplies_102130-10.jpg"
								/>
							</Col>
							<Col xs="12" md="6">
								<h2 className="h2second">
									<a href="/log">Your Personal Diary</a>
								</h2>
								<p style={{ color: 'rgb(179, 2, 189)' }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap into electronic
								</p>
							</Col>
						</Row>

						<Row>
							<Col xs="12" md="6" className="colSelected">
								<CardImg
									style={{ height: '100%', borderRadius: '25px' }}
									src="https://surecomamerica.files.wordpress.com/2020/04/lavorare-da-casa-02_opt.jpg?w=695"
								/>
							</Col>
							<Col xs="12" md="6">
								<h2 className="h2third">
									<a href="/project">Organize your Projects</a>
								</h2>

								<p style={{ color: 'rgb(255, 135, 43)' }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap into electronic
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
