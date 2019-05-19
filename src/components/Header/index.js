import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Colors } from 'themes'

const MainHeader = styled.header`
  padding: 20px;
`
const HeaderNav = styled.ul`
  list-style: none;
  float: right;
`
const HeaderLink = styled(Link)`
  color: ${Colors.white};
  text-decoration: none;
  margin-right: 15px;
  font-size: 13px;
  padding: 12px;
  ::before {
    counter-increment: header-item;
    content: counter(header-item) '. ';
    color: aqua;
  }
  :hover {
    border: 1px solid aqua;
    color: aqua;
  }
`

const Header = () => (
    <MainHeader>
      <HeaderNav>
      <HeaderLink to='/'>About</HeaderLink>
      <HeaderLink to='/'>Work</HeaderLink>
      <HeaderLink to='/'>Projects</HeaderLink>
      <HeaderLink to='/'>Resume</HeaderLink>
      <HeaderLink to='/'>Contact</HeaderLink>
      </HeaderNav>
    </MainHeader>
)

export { Header }
