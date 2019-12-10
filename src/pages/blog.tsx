import React from "react"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Header from "../components/header"

const Blog = () => {
  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <Link to="/">Go back to the homepage</Link>
      <Footer />
    </div>
  )
}

export default Blog
