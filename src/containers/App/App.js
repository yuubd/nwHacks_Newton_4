import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from '../../logo.svg';
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
import Home from '../../components/Home/Home';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
