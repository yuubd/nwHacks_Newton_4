import { userConstants } from '../_constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user } : {};

export const auth = (state = initialState, action = {}) => {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return Object.assign({}, state, { user: action.email });

		case userConstants.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				loggedIn: true,
				email: action.email
			});

		case userConstants.LOGIN_FAILURE:
			return Object.assign({}, state, {
				loggedIn: false
			});

		case userConstants.LOGOUT:
			return Object.assign({}, state, {
				loggedIn: false
			});

		default:
			return state;
	}
};
