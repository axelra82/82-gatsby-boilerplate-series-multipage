import processMessage from './formatMessage';
import axios from 'axios';

export default async data => {
	const postMessage = await processMessage(data);
	const options = {
		method: "post",
		url: '/.netlify/functions/slack',
		data: postMessage
	};
	const postResponse = await axios(options);
	return postResponse;
}