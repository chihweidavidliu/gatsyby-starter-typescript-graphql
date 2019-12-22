import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(max-content, max-content));
  align-items: center;
  h1 {
    color: white;
    font-size: 18px;
    padding: 20px;
    color: white;
    margin: 0;
    &:hover {
      background-color: #401f60;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 376px) {
    grid-template-columns: 1fr;
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
      <StyledLink to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </StyledLink>

      <StyledLink to="/blog">
        <h1>My Blog </h1>
      </StyledLink>

      <StyledLink to="/about">
        <h1>About me </h1>
      </StyledLink>

      <StyledLink to="/contact">
        <h1>Contact me </h1>
      </StyledLink>
    </StyledHeader>
  )
}
export default Header
