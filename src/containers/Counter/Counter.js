import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { countActions } from '../../_actions/countActions';
import './Counter.css';

const mapStateToProps = (state) => {
	return {
		email: state.auth.user,
		count: state.count.count
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateCount: (count, email, gender, age, isIn) => dispatch(countActions.submitCount(count, email, gender, age, isIn)),
		onRequestCount: (email) => dispatch(countActions.requestCount(email))
	};
};

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

	componentDidMount() {
		const { email, onRequestCount } = this.props;
		onRequestCount(email);
	}

	handleAge(e) {
		this.setState({
			age: e.target.id
		});
	}

	handleGender(e) {
		this.setState({
			gender: e.target.id
		});
	}

	handleIn() {
		console.log(this.props.email);
		const { email, onUpdateCount } = this.props;
		const { count, gender, age } = this.state;
		this.setState(
			{
				count: count + 1
			},
			() => {
				onUpdateCount(count, email, gender, age, true);
			}
		);
		console.log(this.props.count);
	}

	handleOut() {
		const { email, onUpdateCount } = this.props;
		const { count, gender, age } = this.state;
		this.setState(
			{
				count: count - 1
			},
			() => {
				onUpdateCount(count, email, gender, age, false);
			}
		);
		alert('THANKS FOR BEING WITH US');
		console.log(count);
	}

	render() {
		console.log('this.props.count');
		console.log(this.props.count);
		return (
			<div className="center">
				<nav className="dt h-10 w-100 relative bg-black-80 center">
					<div className="dtc v-mid tr pa3">
						<Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">
							How it Works
						</Link>
						<Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/dashboard">
							DashBoard
						</Link>
					</div>
				</nav>

				<div className="bg-light-grey mt4 mw7 center pl4 pr4 br2-ns ba b--black-10">
					<form className="pa0 ma0 black-80 w-100 center">
						<div className="bg-white black-80 tc pb0 avenir">
							<p className="black-80 f5 f4-ns dib mr3">Remaining: {this.state.count} !</p>
							<p className="black-80 f5 f4-ns dib mr3">You are almost there! </p>
							<h2 className="mt2 mb0 mt4 f6 fw4 ttu tracked">Choose your gender</h2>
							<div>
								<a
									id="male"
									onClick={this.handleGender}
									className="f4 f5-l pointer link bg-animate black-60 hover-bg-light-green dib pa3 ph4-l fw3"
									title="Link 1"
								>
									Male
								</a>
								<a className="black-80 f5 f4-ns dib mr3 ml3">|</a>
								<a
									id="female"
									onClick={this.handleGender}
									className="f4 f5-l pointer link bg-animate black-60 hover-bg-light-yellow dib pa3 ph4-l fw3"
									title="Link 2"
								>
									Female
								</a>
								<a className="black-80 f5 f4-ns dib mr3 ml3">|</a>
								<a
									id="preferred not"
									onClick={this.handleGender}
									className="f4 f5-l pointer link bg-animate black-60 hover-bg-light-red dib pa3 ph4-l fw3"
									title="Link 3"
								>
									Preferred not
								</a>
							</div>
							<div className="bg-white black-80 tc pv4 avenir">
								<h2 className="mt2 mb0 f6 fw4 ttu tracked">Choose your age</h2>
								<nav className="bt bb tc mw7 center mt3">
									<a
										onClick={this.handleAge}
										id="1"
										className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
										href="#0"
									>
										0 ~ 18
									</a>
									<a
										onClick={this.handleAge}
										id="2"
										className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
										href="#0"
									>
										19 ~ 25
									</a>
									<a onClick={this.handleAge} id="3" className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="#0">
										26 ~ 30
									</a>
									<a onClick={this.handleAge} id="4" className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="#0">
										31 ~ 40
									</a>
									<a
										onClick={this.handleAge}
										id="5"
										className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
										href="#0"
									>
										41 ~ 50
									</a>
									<a
										onClick={this.handleAge}
										id="6"
										className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
										href="#0"
									>
										51 ~ 60
									</a>
									<a
										onClick={this.handleAge}
										id="7"
										className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
										href="#0"
									>
										61 ~
									</a>
								</nav>
								<a onClick={this.handleIn} className="f6 link dim ph-cus pv3 grow no-underline br-pill ba bw1 mb1 mt5 dib black">
									IN
								</a>
							</div>
						</div>
					</form>
				</div>
				<div className="tc">
					<a onClick={this.handleOut} className="f6 link ph-cus pv3 grow no-underline br-pill ba bw1 mb3 mt3 dib black-80 center">
						OUT
					</a>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
