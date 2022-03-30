import * as React from "react";
import ContactForm from "../components/ContactForm/Index";
import Landing from "../components/Landing/Index";
import Projects from "../components/Projects/Index";
import About from "../components/About/Index";
import Tools from "../components/Tools/Index";
import { IndexContainer } from "../components/Index.styled";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Jason Hamm" />
    <Landing></Landing>
    <IndexContainer>
      <Projects></Projects>
      <About></About>
      <Tools></Tools>
      <ContactForm></ContactForm>
    </IndexContainer>
  </Layout>
);

export default IndexPage;
