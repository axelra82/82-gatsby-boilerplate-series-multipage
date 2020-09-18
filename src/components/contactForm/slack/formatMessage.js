export default async data => {
	const { name, email, tel, message } = data
	const date = new Date()
	const formatedMessage = message.replace(/(?:\r\n|\r|\n)/g, "\n>")
	const originalMessage = message.replace(/(?:\r\n|\r|\n)/g, "\n> ")
	return `*From:* ${name}${tel && `\n*Phone:* ${tel}`}\n>${formatedMessage}\n\n<mailto:${email}${encodeURI(`?subject=Re: Website%20Contact%20Form&body=\n\n> On ${date}, ${name}<${email}> Wrote:\n> ${originalMessage}`)}|Reply ${name} with e-mail>`
}
