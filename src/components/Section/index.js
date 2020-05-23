import { Colors, media } from 'themes'
import styled from 'styled-components'

const Container = styled.section`
  padding: 50px;
  display: flex;
  ${media.mobile`
    display: block;
    padding: 50px 0 0;
  `};
`

const ContainerTitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
  height: 100%;
  width: 200px;
  text-align: center;
  color: ${Colors.greenBlue};
  margin-right: 40px;
  border: 2px solid ${Colors.greenBlue};
  border-radius: 20px;
  padding: 10px 0;
  ${media.mobile`
    width: 100%;
  `};
`
export { Container, ContainerTitle }
