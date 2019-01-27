import { countConstants } from '../_constants/countConstants.js';
import { sendRequestWithJWTAuthHeaderAsync } from '../_helpers/http';

export const countActions = { submitCount, requestCount };

function submitCount(count, email, genderId, ageId, isIn) {
	return (dispatch) => {
		dispatch(request({ count }));

		const body = JSON.stringify({ count, email, genderId, ageId });

		const uri = '/count/v1' + isIn ? '/in' : '/out';

		sendRequestWithJWTAuthHeaderAsync('post', email, uri, body)
			.then((res) => {
				const newCount = res.json();
				dispatch(success({ newCount }));
			})
			.catch((err) => {
				dispatch(failure());
				console.log(err);
				alert('Count update request has failed');
			});
	};

	function request(count) {
		return { type: countConstants.COUNT_UPDATE_REQUEST, count };
	}
	function success(count) {
		return { type: countConstants.COUNT_UPDATE_SUCCESS, count };
	}
	function failure() {
		return { type: countConstants.COUNT_UPDATE_FAILURE };
	}
}

function requestCount(email) {
	console.log(email);
	if (email == null) {
		alert('Log in first');
	}
	return (dispatch) => {
		dispatch(request());

		dispatch(success({ count: 50 }));

		const uri = '/count/' + email;

		sendRequestWithJWTAuthHeaderAsync('get', email, uri, {})
			.then((res) => {
				const newCount = res.json();
				dispatch(success({ newCount }));
			})
			.catch((err) => {
				dispatch(failure());
				console.log(err);
				alert('Count get request has failed');
			});
	};

	function request() {
		return { type: countConstants.COUNT_REQUEST_REQUEST };
	}
	function success(count) {
		return { type: countConstants.COUNT_REQUEST_SUCCESS, count };
	}
	function failure() {
		return { type: countConstants.COUNT_REQUEST_FAILURE };
	}
}
