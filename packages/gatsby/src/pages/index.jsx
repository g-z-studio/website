import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Coucou</h1>
    <h2>Tu es chez la g.z. ici poto</h2>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">Projets</Link>
    <br />
  </Layout>
)

export default IndexPage
