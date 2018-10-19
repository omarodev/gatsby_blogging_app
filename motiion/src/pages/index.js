import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../layouts'

const IndexPage = () => (
  <React.Fragment>
    <Layout
      pageTitle='Home'
      meta={[
        { name: 'description', content: 'Mottion PWA' },
        { name: 'keywords', content: 'Mottion, Gatsby, PWA' },
      ]}
    >
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </React.Fragment>
)

export default IndexPage
