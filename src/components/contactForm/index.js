import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Form from './form';
import Response from './response';
import Processing from './processing';
import slackHandler from './slack';
import awsHandler from './aws';
import netlifyHandler from './netlify';
import './style.scss';

export default () => {
	// Set correct form handler: slack, aws or netlify
	const formHandler = "local";

	const formEl = useRef(0);
	const messageEl = useRef(0);
	const [messageHeight, setMessageHeight] = useState(0);

	const [displayNone, setDisplayNone] = useState(false);
	const [showForm, setShowForm] = useState(true);
	const [postResponse, setPostResponse] = useState(0);
	const [processing, setProcessing] = useState(false);

	const { register, errors, handleSubmit } = useForm();
	const onSubmit = async data => {
		// Scroll form into view
		const formTopOffset = formEl && formEl.current.getBoundingClientRect().top + window.scrollY;
		window.scroll({
			top: formTopOffset - 100,
			left: 0,
			behavior: "smooth",
		})
		// Show processing
		setShowForm(!showForm);
		setProcessing(!processing);
		// Switch for form handler and process
		switch (formHandler) {
			case "slack":
				setPostResponse(await slackHandler(data));
				break;
			case "aws":
				setPostResponse(await awsHandler(data));
				break;
			case "netlify":
				setPostResponse(await netlifyHandler(data));
				break;
			case "local":
				// Used for local dev
				const respCodes = [200, 400];
				const randResp = Math.floor(Math.random() * respCodes.length);
				setPostResponse({ status: respCodes[randResp] });
				break;
			default:
				// Default to error.
				setPostResponse(400);
				// Start chasing the dragon.
				break;
		}
		setProcessing(false);

		setMessageHeight(messageEl.current.clientHeight);
		setTimeout(() => {
			// Match time out with
			// $transitionDuration in style
			setDisplayNone(!displayNone);
		}, 500);
	}
	const formProps = { formHandler, formEl, showForm, messageHeight, register, errors, handleSubmit, onSubmit };
	const responseProps = { messageEl, postResponse, displayNone };

	return (
		<section id="contact-form">
			{!showForm && processing && <Processing />}
			{!showForm && !processing && <Response props={responseProps} />}
			{!displayNone && <Form props={formProps} />}
		</section>
	)
}
