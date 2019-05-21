import styled from 'styled-components'
import { Colors, media } from 'themes'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${Colors.night};
  color: ${Colors.white};
`

export const StyledContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 50px;
  ${media.tablet`
    margin: unset;
  `};
  
  
`
