import React, { Component } from 'react';
class Register extends Component {
	render() {
		return (
			<div>
				<h1>REGISTRATION PAGE</h1>
				<form className="registration">
					<div className="measure">
						<label for="name" class="f6 b db mb2">
							Username <span class="normal black-60">(required)</span>
						</label>
						<input
							id="name"
							className="input-reset ba b--black-20 pa2 mb2 db w-100"
							type="text"
							aria-describedby="name-desc"
						/>
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>

						<label for="name" class="f6 b db mb2">
							Password <span class="normal black-60">(required)</span>
						</label>
						<input
							id="name"
							className="input-reset ba b--black-20 pa2 mb2 db w-100"
							type="text"
							aria-describedby="name-desc"
						/>
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>

						<label for="name" class="f6 b db mb2">
							Shelter Name <span class="normal black-60">(required)</span>
						</label>
						<input id="name" className="" type="text" aria-describedby="name-desc" />
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>

						<label for="name" class="f6 b db mb2">
							IDNumber <span class="normal black-60">(required)</span>
						</label>
						<input
							id="name"
							className="input-reset ba b--black-20 pa2 mb2 db w-100"
							type="text"
							aria-describedby="name-desc"
						/>
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>

						<label for="name" class="f6 b db mb2">
							CapacityNumber <span class="normal black-60">(required)</span>
						</label>
						<input
							id="name"
							className="input-reset ba b--black-20 pa2 mb2 db w-100"
							type="text"
							aria-describedby="name-desc"
						/>
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>

						<label for="name" class="f6 b db mb2">
							{' '}
							<span class="normal black-60">(optional)</span>
						</label>
						<input
							id="name"
							className="input-reset ba b--black-20 pa2 mb2 db w-100"
							type="text"
							aria-describedby="name-desc"
						/>
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>

						<label for="name" class="f6 b db mb2">
							Name <span class="normal black-60">(optional)</span>
						</label>
						<input
							id="name"
							className="input-reset ba b--black-20 pa2 mb2 db w-100"
							type="text"
							aria-describedby="name-desc"
						/>
						<small id="name-desc" className="f6 black-60 db mb2">
							Helper text for the form control.
						</small>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
