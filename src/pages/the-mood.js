import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const TheMood = () => (
  <div className="tc">
    <SEO title="The Mood" />
    <h1>The Mood</h1>
    <p>Get movie AND food recommendations at the same time!</p>
    <Link to="/">Homepage</Link>
  </div>
)

export default TheMood
