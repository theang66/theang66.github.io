import React from "react"
import { Link } from "gatsby"
import hello from "../images/hello.gif"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi people!</h1>
    <p>Welcome to Anh's site.</p>
    <img src={hello} alt="hi there" width="400px" />
    <br/>
    <Link to="/about-me/">About Me</Link>
    <br/>
    <Link to="/the-mood/">The Mood</Link>
  </div>
)

export default IndexPage
