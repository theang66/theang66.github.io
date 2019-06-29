import React from "react"
import { Link } from "gatsby"
import Pdf from '../documents/AnhNguyen.pdf';

import SEO from "../components/seo"

const AboutMe = () => (
  <div className="tc">
    <SEO title="About Me" />
    <h1>Anh Nguyen</h1>
    <p>I am into web development and user experience design!</p>
    <ul className="list ph3 ph5-ns pv4">
      <li><a href="https://github.com/theang66" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/thuyanhng/" target="_blank">LinkedIn</a></li>
      <li><a href={Pdf} target="_blank">Resume</a></li>
      <li><a href="mailto:anguyen1@macalester.edu">Email</a></li>
    </ul>
    <Link to="/">Homepage</Link>
  </div>
)

export default AboutMe
