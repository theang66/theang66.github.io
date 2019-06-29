import React from "react"
import { Link } from "gatsby"
import hello from "../images/hello.gif"
import "tachyons"

import SEO from "../components/seo"

const IndexPage = () => (
  <div className="tc">
    <SEO title="Home" />
    <h1>Hi people!</h1>
    <p>Welcome to Anh's site.</p>
    <img src={hello} alt="hi there" width="400px" />
    <br/>
    <ul style={{ "list-style-type": "none" }}>
      <li><Link to="/about-me/">About Me</Link></li>
      <li><Link to="/the-mood/">The Mood</Link></li>
    </ul>
  </div>
)

export default IndexPage
