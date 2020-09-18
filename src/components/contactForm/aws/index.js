import axios from 'axios';

export default async (data) => {
	const options = {
		method: "post",
		url: '/.netlify/functions/aws-ses',
		data: data
	};
	const postResponse = await axios(options);
	return postResponse;
}