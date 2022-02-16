import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { ErrorContainer, Title, Description } from "../components/404.styled";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <ErrorContainer>
      <br />
      <br />
      <br />
      <Title>404: Not Found</Title>
      <Description>You just hit a route that doesn&#39;t exist...</Description>
      <Description>
        "At the core of all well-founded belief lies belief that is unfounded" -
        Ludwig Wittgenstein
      </Description>
    </ErrorContainer>
  </Layout>
);

export default NotFoundPage;
