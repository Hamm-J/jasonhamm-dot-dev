import * as React from "react";
import { Link } from "gatsby";
import ContactForm from "../components/ContactForm/Index";
import Landing from "../components/Landing/Index";
import Projects from "../components/Projects/Index";
import About from "../components/About/Index";
import Tools from "../components/Tools/Index";

import Layout from "../components/layout";
import Seo from "../components/seo";

const apiKey = process.env.GATSBY_API_KEY;
// const apiKey = process.env.GATSBY_SENDGRID_API_KEY;
console.log(apiKey);

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing></Landing>
    <Projects></Projects>
    <About></About>
    <Tools></Tools>
    <ContactForm></ContactForm>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
);

export default IndexPage;
