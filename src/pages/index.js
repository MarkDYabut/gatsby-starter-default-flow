import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactFlowDiv from "../components/reactFlowDiv"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ReactFlowDiv />

    <p>
      <Link to="/page-2/">Go to "Using ReactFlowGettingStarted"</Link> <br />
      <Link to="/page-3/">Go to "Using ReactFlowBasicFunctionality"</Link> <br />
      <Link to="/page-4/">Go to "Using ReactFlowCustomNodes"</Link> <br />
      <Link to="/page-5/">Go to "Using ReactFlowExamples"</Link> <br />
      <Link to="/page-6/">Go to "Using ReactFlowInteraction"</Link> <br />
    </p>

    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
