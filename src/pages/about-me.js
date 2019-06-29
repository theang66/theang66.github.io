import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const AboutMe = () => (
  <div className="tc">
    <SEO title="About Me" />
    <h1>Anh Nguyen</h1>
    <Link to="/">Homepage</Link>
  </div>
)

export default AboutMe
