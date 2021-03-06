import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { StyledContent, StyledLayout } from './styles'
import { Footer } from 'components/Footer'

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export { Layout }
