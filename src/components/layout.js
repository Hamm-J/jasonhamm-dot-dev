/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { useState } from "react";

// import Header from "./header";
import Header from "./Header/Index";
import "./layout.css";
import Footer from "./Footer/Index";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import GlobalStyle from "./layout.styled";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        theme={theme}
        setTheme={setTheme}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Jason Hamm. All Rights Reserved.
        </Footer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
