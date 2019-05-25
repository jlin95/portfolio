import React from 'react'
import styled from 'styled-components'
import { Container as WorkContainer, ContainerTitle } from 'components/Section'
import { Timeline } from 'components/Timeline'

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
  return (
    <WorkContainer>
      <ContainerTitle>Work</ContainerTitle>
      <Timeline data={content}/>
    </WorkContainer>
  )
}

export { Work }
