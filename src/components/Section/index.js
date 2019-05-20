import { Colors, media } from 'themes'
import styled from 'styled-components'

const Container = styled.section`
  padding: 50px;
  display: flex;
  align-items: center;
  ${media.mobile`
    display: block;
    padding: 0;
  `};
`

const ContainerTitle = styled.div`
  font-size: 20px;
  width: 200px;
  text-align: center;
  color: ${Colors.greenBlue};
  margin-right: 40px;
  border: 2px solid ${Colors.greenBlue};
  border-radius: 20px;
  padding: 10px 0;
`
export { Container, ContainerTitle }
