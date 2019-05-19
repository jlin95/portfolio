import React from 'react'
import { graphql } from 'gatsby';
import { Hero } from 'components/Hero'
import { Layout } from 'components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero content={data.hero.edges[0].node}/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/Hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            ctaText
          }
          html
        }
      }
    }
  }
`;


