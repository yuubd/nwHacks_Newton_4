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
				<main className="pa4 black-80">
					<form className="measure center">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f4 fw6 ph0 mh0">Login</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">
									Email
								</label>
								<input
									onChange={this.onEmailChange}
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="email"
									name="email-address"
									id="email-address"
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">
									Password
								</label>
								<input
									onChange={this.onPasswordChange}
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="password"
									name="password"
									id="password"
								/>
							</div>
						</fieldset>
						<div className="">
							<input
								onClick={this.handleSubmit}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
								type="submit"
								value="Log in"
							/>
						</div>
						<div className="lh-copy mt3">
							<Link to="/register" className="f6 link dim black db">
								Register
							</Link>
							<Link to="/" className="f6 link dim black db">
								Forgot your password?
							</Link>
						</div>
					</form>
				</main>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
