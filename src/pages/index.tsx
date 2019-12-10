import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hi people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <h2>Open Source</h2>

      <Link to="/blog">My Blog</Link>
      <Link to="/about">About me</Link>
      <Link to="/conact">Contact me</Link>
    </div>
  )
}

export default IndexPage
