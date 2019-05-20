import React from 'react'
import styled from 'styled-components'
import { Container as WorkContainer, ContainerTitle } from 'components/Section'

const Introduction = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 1.5rem;
`
const SkillsOverview = styled.h2`
  font-size: 30px;
  margin: 0;
`

const Work = ({ content }) => {
  const { frontmatter, html } = content
  const { title, skills } = frontmatter
  return (
    <WorkContainer>
      <ContainerTitle>Work</ContainerTitle>
      <Introduction>This covers the job experiences for my current and previous internships. To be updated.</Introduction>
    </WorkContainer>
  )
}

export { Work }
