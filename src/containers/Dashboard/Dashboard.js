import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {RadialChart} from 'react-vis';

const myData = [{angle:1}, {angle:1}, {angle:1}]

class Dashboard extends Component {
	render() {
		return (
			<div>
			<nav className=" dt h-10 w-100 relative bg-black-80 center">
			<h1 className="left white-70 pv2"> Dashboard Page </h1>
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
			<div className="bg-light-grey mw8 center pa4 br2-ns b--black-10 flex">
				<div className="center">
				<h3 className="center">Gender Breakdown</h3>
			 	<RadialChart className = "center" data={myData} width={300} height={300}/>
				</div>

				<div className="center">
				<h3 className="center">Age Breakdown</h3>
				<RadialChart className = "center" data={myData} width={300} height={300}/>
				</div>

				<div className="center">
				<h3 className="center">Enter</h3>
				<RadialChart className = "center" data={myData} width={300} height={300}/>
				</div>
				</div>
				<div className="center">
				<a onClick = {this.getLatestData} className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">Update Data </a>
				</div>

				<div className="center">
				<h1>Total Beds Taken: {/*axios.Get()*/}</h1>
				<h1>Total Beds Available: {/*axios.Get()*/}</h1>
				</div>
				</div>
		);
	}
}


export default Dashboard;
