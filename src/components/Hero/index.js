import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Colors } from 'themes'

const FlexContainer = styled.section`
  padding: 0 50px;
`
const Introduction = styled.div`
  font-size: 13px;
`
const Hello = styled.h2`
  font-size: 14px;
  color: ${Colors.greenBlue};
`
const Name = styled.h2`
  font-size: 76px;
`
const Subtitle = styled.h3`
  font-size: 50px;
  color: ${Colors.greenBlue};
`

const Hero = ({ content }) => {
 const { frontmatter, html } = content
 return (
   <FlexContainer>
     <Hello>{frontmatter.title}</Hello>
     <Name>{frontmatter.name}</Name>
     <Subtitle>{frontmatter.subtitle}</Subtitle>
     <Introduction dangerouslySetInnerHTML={{ __html: html }} />
  </FlexContainer>
 )
}

export { Hero }
