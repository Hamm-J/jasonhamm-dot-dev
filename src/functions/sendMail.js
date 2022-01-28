const sgMail = require("@sendgrid/mail");
const { GATSBY_SENDGRID_API_KEY } = process.env;

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body);
  const { email } = payload;

  sgMail.setApiKey(GATSBY_SENDGRID_API_KEY);

  const body = Object.keys(payload)
    .map((k) => {
      return `${k}: ${payload[k]}`;
    })
    .join("<br><br>");

  const msg = {
    to: "hamm.inquiries@gmail.com",
    from: email,
    subject: "Contact Form Submission",
    html: body,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
