/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import styled from "styled-components"

import Header from "./header"
import { GlobalStyles } from "../globalStyles"
import Footer from "./footer"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 0px;
`
interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ContentWrapper>
        <main>{children}</main>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default Layout
