import { userConstants } from '../_constants/userConstants.js';
import { sendRequestWithJWTAuthHeaderAsync } from '../_helpers/http';

export const userActions = {
	login,
	logout,
	register
};

function login(email, password) {
	return (dispatch) => {
		dispatch(request({ email }));

		// localStorage.setItem('user', JSON.stringify(email));

		const body = JSON.stringify({ email, password });

		const uri = '/login';

		sendRequestWithJWTAuthHeaderAsync('post', email, uri, body)
			.then((res) => {
				const email = res.json();
				dispatch(success({ email }));
				window.location.href = '../dashboard';
			})
			.catch((err) => {
				dispatch(failure());
				console.log(err);
				alert('Logging in has failed');
			});
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
}

function logout() {
	return (dispatch) => dispatch({ type: userConstants.LOGOUT });
}

function register(email, password, name) {
	return (dispatch) => {
		if (!(email.length && password.length && name.length)) return;

		dispatch(request());

		const body = JSON.stringify({ email, password });

		const uri = '/login';

		sendRequestWithJWTAuthHeaderAsync('post', email, uri, body)
			.then((res) => {
				const email = res.json();
				dispatch(success({ email }));
				window.location.href = '../dashboard';
			})
			.catch((err) => {
				dispatch(failure());
				console.log(err);
				alert('Logging in has failed');
			});

		function request() {
			return { type: userConstants.SIGNUP_REQUEST };
		}
		function success() {
			return { type: userConstants.SIGNUP_SUCESS };
		}
		function failure() {
			return { type: userConstants.SIGNUP_FAILURE };
		}
	};
}
