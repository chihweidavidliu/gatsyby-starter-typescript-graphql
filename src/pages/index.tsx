import React, { FunctionComponent } from "react"
import { Query } from "../../graphql-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

interface IndexProps extends FunctionComponent {
  data: Query
}

const IndexPage = (props: IndexProps) => {
  console.log(props)
  const { data } = props
  return (
    <Layout>
      <h1>Hi people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <h2>Open Source</h2>

      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>

      <Link to="/blog">My Blog</Link>
      <Link to="/about">About me</Link>
      <Link to="/conact">Contact me</Link>
    </Layout>
  )
}

export const blogQuery = graphql`
  query BlogPages {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
