import React from 'react'
import config from '../data/config'
import Header from 'components/Header'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout>
  <Header siteTitle={config.siteTitle}/>
  </Layout>
)

export default IndexPage
