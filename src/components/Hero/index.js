import React from 'react'
import styled from 'styled-components'
import { Colors, media } from 'themes'

const HeroContainer = styled.section`
`
const Introduction = styled.h5`
  font-size: 15px;
  margin: 2rem 0;
  font-weight: normal;
  line-height: 1.3rem;
`
const Hello = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 2rem 0;
  color: ${Colors.greenBlue};
`
const Name = styled.h2`
  font-size: 76px;
  margin: 0;
  ${media.mobile`
    font-size: 70px;
    text-align: start;
  `};
`
const LinkGroup = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
  }
  li:not(:last-child):after {
    color: ${Colors.grey};
    content: '/';
    margin: 0 6px;
  }
  li > a {
    color: ${Colors.greenBlue};
  }
`

const Hero = ({ content }) => {
 const { frontmatter, html } = content
 const { github, linkedin, resume, title, name } = frontmatter
 return (
   <HeroContainer>
     <Hello>{title}</Hello>
     <Name>{name}</Name>
     <Introduction dangerouslySetInnerHTML={{ __html: html }} />
     <span>Say Hi <span role='img' aria-label='hi'>👇</span> </span>
     <LinkGroup>
       <li><a href={github}>Github</a></li>
       <li><a href={linkedin}>Linkedin</a></li>
       <li><a href={resume} target='_blank' rel='nofollow noopener noreferrer'>Resume</a></li>
       {/*<li><a href={writings}>Writings</a></li>*/}
     </LinkGroup>
  </HeroContainer>
 )
}

export { Hero }
