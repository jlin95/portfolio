import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: black;
  padding: 20px 50px;
  font-size: 14px;
  text-align: center;
`

const Footer = () => {
  return <StyledFooter>Built by Sam Lee using GatsbyJS <span role='img' aria-label='wine-glass'>🥂</span> (2019)</StyledFooter>
}

export { Footer }
