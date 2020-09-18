import axios from 'axios';
// Some encoding needed for form data
const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}
export default async data => {
	let statusCode = 0;

	const options = {
		method: "post",
		url: "/",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		data: encode({ "form-name": "contact-form", ...data })
	};

	try {
		await axios(options);
		statusCode = 200;
	} catch (err) {
		statusCode = 403;
		console.log("error: ", err);
	}

	// Return status code in object
	// to match other responses
	return { status: statusCode };
}