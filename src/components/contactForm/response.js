import React from 'react';

export default ({ props }) => {
	const { messageEl, postResponse, displayNone } = props;
	const webmasterEmail = "axelra82@gmail.com";
	let returnStatus = "";
	let returnTitle = "";
	let returnMessage = "";

	if (postResponse.status === 200) {
		returnStatus = "success";
		returnTitle = "Thank you!";
		returnMessage = <p>Talk to you soon.</p>;
	} else {
		returnStatus = "danger";
		returnTitle = postResponse.status ? postResponse.status : 404;
		returnMessage = <>
			<p>Well that was no fun! Seems like there was an error.</p>
			<p><em>If the problem persists, please let us know</em></p>
			<p>
				<a href={`mailto:${webmasterEmail}?subject=@webmaster - Website contact form error ${returnTitle}.`}>
					{webmasterEmail}
				</a>
			</p>
		</>;
	}

	return (
		<section
			ref={messageEl}
			className={`align-center show form-${returnStatus}-message`}
			style={{ position: displayNone && "relative" }}
		>
			<h3 className={`text-${returnStatus}`}>
				{returnTitle}
			</h3>
			<section className={`text-medium text-${returnStatus}`}>
				{returnMessage}
			</section>
		</section>
	)
}