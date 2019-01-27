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
			.cahtch((err) => {
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
	return (dispatch) => {
		dispatch(request());

		dispatch(success({ count: 50 }));

		sendRequestWithJWTAuthHeaderAsync('post', email, '/count', {})
			.then((res) => {
				const newCount = res.json();
				dispatch(success({ newCount }));
			})
			.cahtch((err) => {
				dispatch(failure());
				console.log(err);
				alert('Count get request has failed');
			});

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
