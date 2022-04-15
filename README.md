# jasonhamm dot dev

---

## Description

Out of the countless ways to create a personal webpage and portfolio, I decided
to use React and [GatsbyJS](https://www.gatsbyjs.com/). I wanted to use React for UI implementation and paired it with GatsbyJS to overcome some of the common shortcomings React applications face.

GatsbyJS allows the developer to generate a static HTML document from a React application, which they can serve to the user via a CDN. By serving the statically generated HTML document: (1) my React website has a fast initial loading speed,
as the client side rendering of the typical React app is circumvented; and (2)
by serving an already generated HTML document, Google's web crawlers can effectively
scrape my website's meta data for effective SEO.

### Technologies

As explained above, this is a React project paired with GatsbyJS. For hosting and
content delivery, I deployed my site with [Netlify](https://www.netlify.com/) and
also setup [Netlify's CMS](https://www.netlifycms.org/) for myself, to allow me to make quick and easy edits and updates to my website via markdown from any web browser with no need to open this repository documents. To query and handle the markdown
data, I used GatsbyJS's native [GraphQL API](https://www.gatsbyjs.com/docs/graphql/).

For styling my website, I used [styled-components](https://styled-components.com/)
for nesting CSS classes like in SCSS/SASS, the ability to pass state data and logic to components' styles, and the ability to easily create different themes for components.
I also used a GatsbyJS animation plugin called [gatsby-plugin-scroll-reveal](https://www.gatsbyjs.com/plugins/gatsby-plugin-scroll-reveal/), which is based of the lightweight JavaScript library [Sal](https://mciastek.github.io/sal/) for quick and easy animation control.

Since GatsbyJS serves a static HTML document, the functionality can be quite limited.
However, I was able to add functionality back to my contact form using [Netlify Functions](https://docs.netlify.com/functions/overview/), which is powered by [AWS Lambda](https://aws.amazon.com/lambda/), to create an HTTP request to execute my contact form function. For the actual email handling, I used [SendGrid](https://sendgrid.com/) and its [NodeJS library](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs) to effectively send emails, while reducing the
likelihood of spam filters intercepting the email to both myself and the sender.

**UPDATE 2022/4/15: I reached the email limit granted in the free tier of SendGrid.** In the meantime, while SendGrid approves my account for a higher tier with more emails, I have set up email handling with [Netlify Forms](https://docs.netlify.com/forms/setup/). With Netlify Forms, I am able to receive messages from users, however, I am not able to send confirmation emails to users. Once SendGrid approves my account for a higher email limit, I will return back to using SendGrid and Netlify Functions.

### Future Features

- Redo scroll animations with CSS: I plan to redo all of the scroll animations
  with CSS instead of Sal for more personalized control over the animations and to reduce dependencies where possible.

## License

This project is licensed under the MIT License.
