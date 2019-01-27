import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
import Home from '../../components/Home/Home';
import Counter from '../Counter/Counter';
import Dashboard from '../../containers/Dashboard/Dashboard';
import PostRegistration from '../../containers/Register/PostRegistration';
import './App.css';

const mapStateToProps = (state) => {
	return {
		users: state.users.email
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// onRequestDiners: () => dispatch(dinerActions.requestDiners())
	};
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/counter" component={Counter} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/postregistration" component={PostRegistration} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
