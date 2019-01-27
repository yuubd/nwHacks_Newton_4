import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Counter.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 50,
			gender: 'preferred not',
			age: '18'
		};

		this.handleAge = this.handleAge.bind(this);
		this.handleGender = this.handleGender.bind(this);
		this.handleOut = this.handleOut.bind(this);
		this.handleIn = this.handleIn.bind(this);
	}

	handleAge(e) {
		this.setState(
			{
				age: e.target.id
			},
			() => {
				console.log(this.state.age);
			}
		);
	}

	handleGender(e) {
		this.setState(
			{
				gender: e.target.id
			},
			() => {
				console.log(this.state.gender);
			}
		);
	}

	handleIn() {
		this.setState(
			{
				count: this.state.count + 1
			},
			() => {
				console.log(this.state.count);
			}
		);
	}

	handleOut() {
		this.setState(
			{
				count: this.state.count - 1
			},
			() => {
				console.log(this.state.count);
			}
		);
	}

	render() {
		return (
			<div>
				<nav className=" dt h-10 w-100 relative bg-black-80 center">
					<div className="dtc v-mid tr pa3">
						<Link
							className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
							to="/"
						>
							How it Works
						</Link>
						<Link
							className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
							to="/dashboard"
						>
							DashBoard
						</Link>
					</div>
				</nav>

				<div className="ba mt4 mw-cus center">
					<form className="pa0 ma0 black-80 w-100 center">
						<div>
							<p className="dim gray f5 f4-ns dib mr3">
								Remaining: {this.state.count} !
							</p>
							<p className="dim gray f5 f4-ns dib mr3">You are almost there! </p>
							<nav className="pv4 ph3">
								<div className="nowrap overflow-x-auto ">
									<a
										id="male"
										onClick={this.handleGender}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 1"
									>
										Male
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										id="female"
										onClick={this.handleGender}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 2"
									>
										Female
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										id="preferred not"
										onClick={this.handleGender}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 3"
									>
										Preferred not
									</a>
								</div>
							</nav>

							<nav className="pv4 ph3">
								<div className="nowrap overflow-x-auto ">
									<a
										className="pointer link dim gray f5 f4-ns dib mr3"
										onClick={this.handleAge}
										title="Link 1"
										id="18"
									>
										~ 18
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 2"
										id="25"
									>
										~ 25
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 3"
										id="30"
									>
										~ 30
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 4"
										id="35"
									>
										~ 35
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 5"
										id="40"
									>
										~ 40
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 6"
										id="45"
									>
										~ 45
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 7"
										id="50"
									>
										~ 50
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 8"
										id="55"
									>
										~ 55
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 9"
										id="60"
									>
										~ 60
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 10"
										id="65"
									>
										~ 65
									</a>
									<a className="dim gray f5 f4-ns dib mr3">|</a>
									<a
										onClick={this.handleAge}
										className="pointer link dim gray f5 f4-ns dib mr3"
										title="Link 11"
										id="66"
									>
										65+
									</a>
								</div>
							</nav>
							<a
								onClick={this.handleIn}
								className="f6 link dim ba ph-cus pv3 mb2 dib black"
								href="#0"
							>
								IN
							</a>
						</div>
					</form>
				</div>
				<a
					onClick={this.handleOut}
					className="f6 link dim ba ph-cus pv3 ma2 dib black"
					href="#0"
				>
					OUT
				</a>
			</div>
		);
	}
}

export default Counter;
