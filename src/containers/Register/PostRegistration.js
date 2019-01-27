import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PostRegistration extends Component {
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
        className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
        to="/"
      >
        How it Works
      </Link>
      <Link
        className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
        to="/login"
      >
        Login
      </Link>
			</div>
			</nav>
      <div className="dt h-100 w-100 absolute bg-black-60 center">
        <div className="mt6 tc">
          <header className="white-70">
            <h2 className="f6 fw1 ttu tracked mb2 lh-title">nwHacks2019</h2>
            <h3 className="f6 fw1 lh-title">January 26th</h3>
          </header>
          <h1 className="f1 f-headline-l fw1 i white-60">Thank you for registering!</h1>
          <blockquote className="ph0 mh0 measure f4 lh-copy center">
            <p className="fw1 white-70">
              We will submit your info to the city to verify your shelter and send an email for the outcome of the decision.
            </p>
            <cite className="f6 ttu tracked fs-normal white">team_newton_4</cite>
          </blockquote>
        </div>
      </div>

			</div>
		);
	}
}

export default PostRegistration;
