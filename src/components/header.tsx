import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, max-content));
  grid-gap: 20px;
  h1 {
    color: white;
    font-size: 18px;
    padding: 10px;
    color: white;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
      </h1>
      <h1>
        <StyledLink to="/blog">My Blog</StyledLink>
      </h1>

      <h1>
        <StyledLink to="/about">About me</StyledLink>
      </h1>
      <h1>
        <StyledLink to="/contact">Contact me</StyledLink>
      </h1>
    </StyledHeader>
  )
}
export default Header
