import React from "react"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Header from "../components/header"

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <Link to="/">Go back to the homepage</Link>
      <Footer />
    </div>
  )
}

export default Contact
