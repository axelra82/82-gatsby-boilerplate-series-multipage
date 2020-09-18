'use strict';
require("dotenv").config();
const axios = require('axios');
// Start handler
exports.handler = async (event) => {
	let statusCode = 0;
	let responseBody = "";

	const options = {
		method: "post",
		url: process.env.SLACK_HOOK,
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		},
		data: JSON.stringify({
			text: event.body
		})
	};

	try {
		await axios(options);
		statusCode = 200;
		responseBody = "Success";
	} catch (err) {
		statusCode = 403;
		responseBody = err;
		console.log("error: ", err);
	}

	// Finalize and return
	const response = {
		statusCode: statusCode,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(responseBody)
	};

	return response;
};