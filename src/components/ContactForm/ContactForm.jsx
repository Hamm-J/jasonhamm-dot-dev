import React from "react"

const ContactForm = () => {
  return (
    <form
      name="contact-form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{
        display: `flex`,
        flexDirection: `column`,
        maxWidth: `500px`,
      }}
    >
      <input type="hidden" name="form-name" value="contact-form"></input>
      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" name="subject" />
      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        name="body"
        style={{
          height: `150px`,
        }}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
