import React from "react"
import { Link } from "gatsby"
import Pdf from '../documents/AnhNguyen.pdf';

import SEO from "../components/seo"

const AboutMe = () => (
  <div className="tc">
    <SEO title="About Me" />
    <h1>Anh Nguyen</h1>
    <p>I am into web development and user experience design!</p>
    <ul style={{ listStyleType: "none" }}>
      <li><a href="https://github.com/theang66" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/thuyanhng/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      <li><a href="mailto:anguyen1@macalester.edu">Email</a></li>
    </ul>
    <Link to="/">Homepage</Link>
  </div>
)

export default AboutMe
