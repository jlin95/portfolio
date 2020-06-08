import React from 'react'
import styled from 'styled-components'
import { Colors, media } from 'themes'
import { Container as AboutContainer, ContainerTitle } from 'components/Section'

const Flex = styled.div`
  width: 100%;
`
const Introduction = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 1.5rem;
  a {
    text-decoration: none;
    color: ${Colors.greenBlue};
  }
`
const SkillsMap = styled.ul`
  display: grid;
  grid-template-columns: minmax(140px, 200px) minmax(140px, 200px);
  ${media.mobile`
    width: 100%;
    padding: 0;
    grid-template-columns: unset;
  `}

`
const SkillItem = styled.li`
  font-family: 'Space Mono';
  display: inline-block;
  ::before {
    content: '\u2192';
    color: ${Colors.greenBlue};
    font-size: 19px;
    margin-right: 6px;
  }
`

const About = ({ content }) => {
  const { frontmatter, html } = content
  const { title, skills } = frontmatter
  return (
    <AboutContainer>
      <ContainerTitle>{title}</ContainerTitle>
      <Flex>
        <Introduction dangerouslySetInnerHTML={{ __html: html }} />
        <SkillsMap>
          {skills.map(item => {
            return <SkillItem>{item}</SkillItem>

          })
          }
        </SkillsMap>
      </Flex>
    </AboutContainer>
  )
}

export { About }
