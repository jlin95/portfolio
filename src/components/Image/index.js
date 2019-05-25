import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from 'themes'

const StyledImg = styled(Img).attrs({
  objectFit: 'contain'
})`
  ${media.mobile`
    display: block;
  `}; 
  margin-right: 12px;
  width: 100%;
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ image }) => (
  <StaticQuery
    query={graphql`
      query {
        catcors: file(relativePath: { eq: "CatCors.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        catsdogs: file(relativePath: { eq: "CatsDogs.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <StyledImg fluid={data[image].childImageSharp.fluid} />}
  />
)
export { Image }
