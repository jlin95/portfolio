import React from 'react'
import styled from 'styled-components'
import { Container as WorkContainer, ContainerTitle } from 'components/Section'
import { Colors, media } from 'themes'
import { Image } from 'components/Image'

const Flex = styled.div`
  width: 100%;
`
const ProjectTitle = styled.a`
  font-size: 16px;
  color: ${Colors.greenBlue};
`
const ProjectItem = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding: 16px;
  ${media.mobile`
    display: block;
  `};
`

const Showcases = ({ content }) => {
  return (
    <WorkContainer>
      <ContainerTitle>Showcases</ContainerTitle>
      <Flex>
      {content.map(project => {
        const { frontmatter, html } = project.node
        const { url, skills, title, image } = frontmatter
        return (
        <ProjectItem>
          {image && <Image image={image}/>}
          <div>
            <ProjectTitle href={url} target='_blank'>{title}</ProjectTitle>
            <ProjectTitle>{skills}</ProjectTitle>
          </div>
        </ProjectItem>
        )
      })}
      </Flex>
    </WorkContainer>
  )
}

export { Showcases }
