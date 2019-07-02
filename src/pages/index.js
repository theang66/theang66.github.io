import React from "react"
import { Link } from "gatsby"
import hello from "../images/hello.gif"
import "tachyons"

import SEO from "../components/seo"

const IndexPage = () => (
  <div className="tc">
    <SEO title="Anh Nguyen" />
    <h1>Hi people!</h1>
    <p>Welcome to Anh's site.</p>
    <img src={hello} alt="hi there" width="400px" />
    <br/>
    <ul style={{ listStyleType: "none", margin: 0 }}>
      <li><Link to="/about-me/">About Me</Link></li>
      <li><Link to="/the-mood/">The Mood</Link></li>
    </ul>
  </div>
)

export default IndexPage
