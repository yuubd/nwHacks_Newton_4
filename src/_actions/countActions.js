import { countConstants } from '../_constants/countConstants.js';
import history from '../_helpers/history';

export const countActions = { submitCount, requestCount };

function submitCount(count) {
	return (dispatch) => {
		dispatch(request({ count }));

		dispatch(success({ count }));

		// window.location.reload();

		// const token = {
		// 	method: 'post',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ count})
		// };

		// fetch('http://localhost:3001/login', token)
		// 	.then((res) => {
		// 		console.log(res);
		// 		return res.json();
		// 	})
		// 	.then((count) => {
		// 		return dispatch(success(count));
		// 	})
		// 	.catch((err) => {
		// 		alert(err);
		// 		alert('Updating count fails');
		// 		return dispatch(failure());
		// 	});
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

function requestCount() {
	return (dispatch) => {
		dispatch(request());

		dispatch(success({ count: 50 }));
		// fetch('http://localhost:3001/login', token)
		// 	.then((res) => {
		// 		console.log(res);
		// 		return res.json();
		// 	})
		// 	.then((count) => {
		// 		return dispatch(success(count));
		// 	})
		// 	.catch((err) => {
		// 		alert(err);
		// 		alert('Updating count fails');
		// 		return dispatch(failure());
		// 	});
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
