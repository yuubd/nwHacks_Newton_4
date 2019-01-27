import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Dashboard extends Component {
	constructor(props)
	{
		super(props);
	}

	render() {
		return (
			<div>
			<nav className=" dt h-10 w-100 relative bg-black-80 center">
			<div className="dtc v-mid tr pa3">
				<Link
					className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
					to="/"
				>
					Shelter Capacity
				</Link>
				<Link
					className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
					to="/login"
				>
					Logout
				</Link>
			</div>
			</nav>
			<div>
				<h1>DASHBOARD PAGE</h1>
			</div>
			</div>
		);
	}
}

export default Dashboard;
