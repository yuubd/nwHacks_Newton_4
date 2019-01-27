import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Register extends Component {
	constructor(props) {
		super(props);
		this.createRequest = this.createRequest.bind(this);
	}

	createRequest() {
		//var authorized = client.post(post.Registration)
		window.location.href = '../postregistration';
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
					<h1>REGISTRATION PAGE</h1>
					<form className="registration">
						<div className="bg-light-grey mw7 center pa4 br2-ns ba b--black-10">
							<label htmlFor="name" className="f6 b db mb2">
								Username <span className="normal black-60">(required)</span>
							</label>
							<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label htmlFor="name" className="f6 b db mb2">
								Password <span className="normal black-60">(required)</span>
							</label>
							<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label htmlFor="name" className="f6 b db mb2">
								Shelter Name <span className="normal black-60">(required)</span>
							</label>
							<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label htmlFor="name" className="f6 b db mb2">
								IDNumber <span className="normal black-60">(required)</span>
							</label>
							<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label htmlFor="name" className="f6 b db mb2">
								CapacityNumber <span className="normal black-60">(required)</span>
							</label>
							<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<label htmlFor="name" className="f6 b db mb2">
								Additional Info <span className="normal black-60">(optional)</span>
							</label>
							<input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />

							<a onClick={this.createRequest} className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">
								Submit{' '}
							</a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
