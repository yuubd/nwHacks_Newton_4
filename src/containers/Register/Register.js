import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sendRequestWithJWTAuthHeaderAsync } from '../../_helpers/http';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			shName: '',
			shId: '',
			capacity: ''
		};
		this.createRequest = this.createRequest.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	createRequest() {
		const { email, password, shName, shId, capacity } = this.state;

		const body = JSON.stringify({ email, password, shName, shId, capacity });
		const uri = '/register';

		sendRequestWithJWTAuthHeaderAsync('post', email, uri, body)
			.then((res) => {
				const email = res.json();
				console.log(email);
				window.location.href = '../postregistration';
			})
			.catch((err) => {
				console.log(err);
				alert('Registering has failed');
			});
	}

	render() {
		return (
			<div>
				<nav className=" dt h-10 w-100 relative bg-black-80 center">
					<div className="dtc v-mid tr pa3">
						<Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">
							How it Works
						</Link>
						<Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/login">
							Login
						</Link>
					</div>
				</nav>
				<div>
					<h1 className="tc">SIGN UP</h1>
					<form className="registration">
						<div className="bg-light-grey mw7 center pa4 br2-ns ba b--black-10">
							<label htmlFor="name" className="f6 b db mb2">
								Email <span className="normal black-60">(required)</span>
							</label>
							<input
								onChange={this.handleChange}
								id="email"
								className="input-reset ba b--black-20 pa2 mb2 db w-100"
								type="text"
								aria-describedby="name-desc"
							/>

							<label onChange={this.handleChange} id="password" htmlFor="name" className="f6 b db mb2">
								Password <span className="normal black-60">(required)</span>
							</label>
							<input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label onChange={this.handleChange} id="shName" htmlFor="name" className="f6 b db mb2">
								Shelter Name <span className="normal black-60">(required)</span>
							</label>
							<input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label onChange={this.handleChange} id="shId" htmlFor="name" className="f6 b db mb2">
								Shelter ID <span className="normal black-60">(required)</span>
							</label>
							<input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label onChange={this.handleChange} id="capacity" htmlFor="name" className="f6 b db mb2">
								CapacityNumber <span className="normal black-60">(required)</span>
							</label>
							<input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<div className="tc">
								<a onClick={this.createRequest} className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">
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

export default Register;
