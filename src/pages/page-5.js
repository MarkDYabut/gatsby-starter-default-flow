import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactFlowGettingStarted from "../components/react-flow/reactFlowGettingStarted"
import ReactFlowBasicFunctionality from "../components/react-flow/reactFlowBasicFunctionality"
import ReactFlowCustomNodes from "../components/react-flow/reactFlowCustomNodes"
import ReactFlowExamples from "../components/react-flow/reactFlowExamples"

const SecondPage = () => (
  <Layout>
    <Seo title="Page five" />
    <ReactFlowExamples />
    <hr />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
