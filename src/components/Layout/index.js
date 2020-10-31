import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle  } from 'styled-components';

import ThemeProvider from 'containers/ThemeProvider'

import SEO from 'components/SEO'
import Nav from 'components/Nav'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
  }
`

const Main = styled.main`
  padding-top: calc(6rem + 1.2rem);
`

const Layout = ({ title, children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <SEO title={title} />
      <Nav />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
