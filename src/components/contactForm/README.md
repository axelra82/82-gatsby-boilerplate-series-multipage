# Contact form

Why use a contact forms? Do visitors really use them?

A contact form can serve many purposes. One major reason for using a contact form, rather than referencing an email address, is that you won't be exposing your email address.

Another scenario for when contact forms are prefered is when visitors might want to get in touch, but for whatever reason can't email from their own client.

A contact form assures that your visitors have a way of initiating contact with you, if that is a desired trait in your project.

## React Hook Form

[react-hook-form](https://react-hook-form.com) is a super light and flexible react hook based form.

## Form processing

How you choose to process and deliver the form data will ultimately be up to you and your specific use-case.

These are used in this boilerplate:

- [Processing with Netlify Function (AWS Lambda)](#netlify-functions)
- [Delivery using slack api](#slack)

### Netlify Functions

This example comes with a [Netlify Function](https://docs.netlify.com/functions/overview/) example, which leverages AWS Lambda to allow for easy backend data proccessing.

### Slack

Once the data is processed it needs to go somewhere. Enter [slack api](https://api.slack.com), to post function response in a slack channel.

**NOTE!** You will need to create and configure your own app.
