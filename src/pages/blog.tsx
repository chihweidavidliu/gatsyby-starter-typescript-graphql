import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog
