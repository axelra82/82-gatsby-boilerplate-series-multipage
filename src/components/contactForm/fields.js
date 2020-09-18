const fields = [
	{
		element: "input",
		title: "Name",
		type: "text",
		name: "name",
		placeholder: "John Doe",
		id: "name",
		register: {
			required: true,
			minLength: 3,
			maxLength: 100,
			pattern: /\D/,
		},
	},
	{
		element: "input",
		title: "Phone (optional)",
		type: "tel",
		name: "tel",
		placeholder: "+1-555-888-123",
		id: "tel",
		register: {
			required: false,
			pattern: /[0-9+()-\s]/gi,
		},
	},
	{
		element: "input",
		title: "Email",
		type: "email",
		name: "email",
		placeholder: "your@email.com",
		id: "email",
		register: {
			required: true,
			minLength: 6,
			pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-zA-Z]{2,99}$/gi,
		},
	},
	{
		element: "textarea",
		title: "Message",
		name: "message",
		placeholder: "Tell us more...",
		id: "message",
		rows: 3,
		register: {
			required: true,
			minLength: 50,
		},
	},
];
export default fields;