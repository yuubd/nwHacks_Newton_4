import { userConstants } from '../_constants/userConstants.js';
import history from '../_helpers/history';

export const userActions = {
	login,
	logout,
	signUp
};

function login(email, password) {
	return (dispatch) => {
		dispatch(request({ email }));

		localStorage.setItem('user', JSON.stringify(email));

		dispatch(success({ email }));

		history.push('/dashboard/');
		// window.location.reload();

		// const token = {
		// 	method: 'post',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ email, password })
		// };

		// fetch('http://localhost:3001/login', token)
		// 	.then((res) => {
		// 		console.log(res);
		// 		return res.json();
		// 	})
		// 	.then((user) => {
		// 		localStorage.setItem('user', JSON.stringify(user.email));
		// 		history.push('/dashboard/');
		// 		return dispatch(success(user));
		// 	})
		// 	.catch((err) => {
		// 		alert(err);
		// 		alert('Account or password is incorrect');
		// 		return dispatch(failure());
		// 	});
	};

	function request(user) {
		return { type: userConstants.LOGIN_REQUEST, user };
	}
	function success(user) {
		return { type: userConstants.LOGIN_SUCCESS, user };
	}
	function failure() {
		return { type: userConstants.LOGIN_FAILURE };
	}
	function getCircularReplacer() {
		const seen = new WeakSet();
		return (key, value) => {
			if (typeof value === 'object' && value !== null) {
				if (seen.has(value)) {
					return;
				}
				seen.add(value);
			}
			return value;
		};
	}
}

function logout() {
	return (dispatch) => dispatch({ type: userConstants.LOGOUT });
}

function signUp(email, password, name) {
	return (dispatch) => {
		if (!(email.length && password.length && name.length)) return;

		dispatch(request());

		const token = {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, name })
		};

		fetch('http://localhost:3001/signup', token)
			.then((res) => res.json())
			.then((user) => {
				if (user) {
					//this.props.loadUserProfile(data);
					return dispatch(success());
				}
			})
			.catch((err) => {
				console.log('Err msg is : ' + err);
				alert('Something went wrong');
				dispatch(failure());
			});

		const request = () => ({ type: userConstants.SIGNUP_REQUEST });
		const success = () => ({ type: userConstants.SIGNUP_SUCESS });
		const failure = () => ({ type: userConstants.SIGNUP_FAILURE });
	};
}
