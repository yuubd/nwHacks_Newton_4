import { countConstants } from '../_constants/countConstants';

const initialSignInfo = {
	count: 0
};

export const count = (state = initialSignInfo, action = {}) => {
	switch (action.type) {
		case countConstants.COUNT_REQUEST_REQUEST:
			return Object.assign({}, state, {});

		case countConstants.COUNT_REQUEST_SUCCESS:
			return Object.assign({}, state, { count: action.count.count });

		case countConstants.COUNT_REQUEST_FAILURE:
			return Object.assign({}, state, {});

		case countConstants.COUNT_UPDATE_REQUEST:
			return Object.assign({}, state, {});

		case countConstants.COUNT_UPDATE_SUCCESS:
			console.log('action.count.count');
			console.log(action.count.count);
			return Object.assign({}, state, { count: action.count.count });

		case countConstants.COUNT_UPDATE_FAILURE:
			return Object.assign({}, state, {});

		default:
			return state;
	}
};
