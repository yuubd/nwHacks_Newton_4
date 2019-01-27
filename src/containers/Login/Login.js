import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/userActions';

const mapDispatchToProps = (dispatch) => {
	return {
		requestLogin: (email, password) => {
			dispatch(userActions.login(email, password));
		}
	};
};

const mapStateToProps = (state) => {
	return {
		email: state.auth.loggedIn
	};
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	handleSubmit() {
		const { email, password } = this.state;
		console.log(this.props.loggedIn);
		this.props.requestLogin(email, password);
	}

	render() {
		return (
			<div>
				<nav className="dt h-10 w-100 relative bg-black-80 center">
					<div className="dtc v-mid tr pa3">
						<Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">
							How it Works
						</Link>
						<Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/register">
							Register
						</Link>
					</div>
				</nav>
				<div>
					<h1 className="tc">LOGIN</h1>
					<form className="registration">
						<div className="bg-light-grey mw7 center pa4 br2-ns ba b--black-10">
							<label htmlFor="name" className="f6 b db mb2">
								Username
							</label>
							<input
								onChange={this.onEmailChange}
								id="name"
								className="input-reset ba b--black-20 pa2 mb2 db w-100"
								type="text"
								aria-describedby="name-desc"
							/>

							<label htmlFor="name" className="f6 b db mb2">
								Password
							</label>
							<input
								onChange={this.onPasswordChange}
								id="name"
								className="input-reset ba b--black-20 pa2 mb2 db w-100"
								type="text"
								aria-describedby="name-desc"
							/>
							<div className="tc">
							<a onClick={this.handleSubmit} className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black">
								Submit
							</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
