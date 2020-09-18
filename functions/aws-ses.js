// Good source https://dev.to/idiglove/contact-form-and-send-as-email-with-aws-ses-netlify-and-gatsby-ae5
'use strict';
require('dotenv').config();
// Setup and Configure AWS
const aws = require('aws-sdk');
aws.config.update({
	// Remember to set up your environment variables
	// somehere secure before using these
	// https://aws.amazon.com/blogs/security/how-to-find-update-access-keys-password-mfa-aws-management-console/
	accessKeyId: process.env.AWS_AKI,
	secretAccessKey: process.env.AWS_SAK,
	region: process.env.AWS_RGN
});
// Setup SES
const ses = new aws.SES({ apiVersion: "2010-12-01" })
// Start handler
exports.handler = async (event) => {
	// Event and response variables
	const sourceEmail = `<axelra82@gmail.com>`;
	const { name, email, tel, message } = JSON.parse(event.body);
	const htmlMessage = `
		<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${tel && `<p><strong>Phone: ${tel}</strong></p>`}
        <p>${message}</p>
	`;
	let statusCode = 0;
	let responseBody = "";
	// Configure SES
	const emailParams = {
		Destination: {
			ToAddresses: [sourceEmail]
		},
		Message: {
			Body: {
				Html: {
					Charset: "UTF-8",
					Data: htmlMessage
				},
			},
			Subject: {
				Data: "Website contact form"
			}
		},
		ReplyToAddresses: [
			email
		],
		Source: sourceEmail
	};
	try {
		await ses.sendEmail(emailParams).promise();
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
}