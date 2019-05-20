import React from 'react'
import { graphql } from 'gatsby';
import { Hero } from 'components/Hero'
import { Layout } from 'components/Layout'
import { About } from 'components/About'
import { Work } from 'components/Work'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero content={data.hero.edges[0].node}/>
    <About content={data.about.edges[0].node}/>
    <Work content={data.work.edges}/>
    {/*<Projects content={data.projects.edges[0].node}/>*/}
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
            github
            linkedin
            resume
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/About/" } }) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }    
    work: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/Work/" } }
    sort: { fields: [frontmatter___order], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            url
            date
            order
          }
          html
        }
      }
    }
  }
`;


