import axios from 'axios';

function _getDefaultConfig(method, uri, body, headers) {
	const v1LocalhostBaseUrl = 'http://test.test';
	const config = {
		method,
		url: uri,
		baseURL: v1LocalhostBaseUrl,
		headers,
		data: body,
		responseType: 'json',
		validateStatus(status) {
			return status >= 200 && status < 300;
		}
	};

	return config;
}

/**
 * Send http request with provided JWT token
 * @param String method
 * @param String authToken
 * @param String uri
 * @param Object body
 * @param Object header       if not provided, default is {}
 */
export function sendRequestWithJWTAuthHeaderAsync(method, userEmail, uri, body, headers = {}) {
	const config = _getDefaultConfig(method, uri, body, headers);
	const authHeader = userEmail == null ? {} : { Authorization: userEmail };

	config.headers = Object.assign(authHeader, headers);
	return axios(config);
}

/**
 * Send http request
 * @param String method
 * @param String uri
 * @param Object body
 * @param Object header       if not provided, default is {}
 */
export function sendRequestAsync(method, uri, body, headers = {}) {
	const config = _getDefaultConfig(method, uri, body, headers);
	return axios(config);
}
