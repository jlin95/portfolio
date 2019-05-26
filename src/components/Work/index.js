import React from 'react'
import { Container as WorkContainer, ContainerTitle } from 'components/Section'
import { Timeline } from 'components/Timeline'

const Work = ({ content }) => {
  return (
    <WorkContainer>
      <ContainerTitle>Work</ContainerTitle>
      <Timeline data={content}/>
    </WorkContainer>
  )
}

export { Work }
