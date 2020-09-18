import React from 'react';
import fields from './fields';
export default ({ props }) => {
	const { formHandler, formEl, showForm, messageHeight, register, errors, handleSubmit, onSubmit } = props;
	const netlifyForm = formHandler === "netlify" ? true : false;
	const netlifyFormName = "contact-form";
	const formClass = "card-body";
	const FormElement = ({ children }) =>
		netlifyForm ?
			<form
				className={formClass}
				name={netlifyFormName}
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value={netlifyFormName} />
				{children}
			</form>
			:
			<form className={formClass}>{children}</form>;

	return (
		<section
			ref={formEl}
			id="form-body"
			className={`card ${!showForm && "hide"}`}
			style={{
				marginBottom: showForm
					? 0
					: -(formEl.current.clientHeight - messageHeight),
			}}
		>
			<section className="card-header">
				<h4 className="mb-0">Contact Form</h4>
				<p className="text-small text-muted">No strings attached.</p>
			</section>
			<FormElement>
				{fields.map(field => {
					const Element = field.element;
					const type = field.type !== "undefined" ? field.type : null;
					const name = field.name;
					const title = field.title;
					const placeholder = field.placeholder;
					const id = field.id;
					const registerValues = field.register;
					const rows = typeof field.rows !== "undefined" ? field.rows : null;

					return (
						<section key={name}>
							<label htmlFor={name} className="text-small">
								<strong>{title}</strong>
							</label>
							<Element
								type={type}
								rows={rows}
								aria-invalid={errors[name] ? "true" : "false"}
								name={name}
								placeholder={placeholder}
								id={id}
								className="form-control input"
								ref={register(registerValues)}
							/>
						</section>
					);
				})}
				<button
					type="submit"
					variant="primary"
					block="true"
					onClick={handleSubmit(onSubmit)}
				>
					Skicka
				</button>
			</FormElement>
		</section>
	)
}