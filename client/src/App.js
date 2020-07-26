import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import LogComponent from './components/LogComponent';
import HomeComponent from './components/HomeComponent';
import AppNavbarComponent from './components/AppNavbar';
import Schedule from './components/ScheduleComponent';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<AppNavbarComponent />
					<Container>
						<Route exact path="/" component={HomeComponent} />
						<Route path="/log" component={LogComponent} />
						<Route path="/schedule" component={Schedule} />
					</Container>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
