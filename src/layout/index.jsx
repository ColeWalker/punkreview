import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import Header from "../components/Header";
import "./index.css";

const GlobalStyle = createGlobalStyle `
  body {
    background-color: #141819;
  }
  a{
    color: white;
  }
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          
        </Helmet>
        <Header />
        {children}
        <GlobalStyle />
      </div>
    );
  }
}
