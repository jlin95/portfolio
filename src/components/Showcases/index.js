import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container as WorkContainer, ContainerTitle } from 'components/Section'
import { Colors, media } from 'themes'
import { ShowcaseImage } from 'components/ShowcaseImage'

const Flex = styled.div`
  width: 100%;
`
const ProjectTitle = styled.a`
  text-decoration: none;
  font-size: 20px;
  display: inline-block !important;
  color: ${Colors.greenBlue};
  ::after {
    display: inline-block;
    margin-left: 12px;
    content: '👉';
  }
  :hover::after {
    transition: all .3s ease-out;
     transform: translate(8px, 0);

   }
}

`
const ProjectItem = styled.div`
  display: block;
  margin-bottom: 16px;
  padding: 16px;
  ${media.mobile`
    display: block;
  `};
`
const SkillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`
const Skill = styled.span`
  font-family: 'Space Mono';
  font-size: 12px;
  padding: 5px;
  margin: 3px;
  color: ${Colors.greenBlue};
  border: 1px solid ${Colors.greenBlue};
`

const Blurb = styled.div`
  font-size: 14px;
  font-weight: lighter;
  p > a { 
    text-decoration: none;
    color: ${Colors.greenBlue};
  }
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
          {image ?
            <Fragment>
              <ProjectTitle href={url}>
                {title}
              </ProjectTitle>
            <a href={url}>
              <ShowcaseImage image={image}/>
            </a>
          </Fragment>
            :
            <ProjectTitle href={url}>
              {title}
            </ProjectTitle>
          }
          <div>
            <SkillGroup>{skills.map(skill => <Skill>{skill}</Skill>)}</SkillGroup>
            <Blurb dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </ProjectItem>
        )
      })}
      </Flex>
    </WorkContainer>
  )
}

export { Showcases }
