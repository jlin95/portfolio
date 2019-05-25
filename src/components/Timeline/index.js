import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Colors, media } from 'themes'

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;
  ${media.mobile`
    width: 100%;
    display: flex;
  `};
  ::after {
    background-color: ${Colors.greenBlue};
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 2px;
    height: 100%;
  }
  
`
const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;
  right: 28px;
  :nth-child(odd) {
   left: 26px;
   align-self: flex-end;
   justify-content: flex-start;
   padding-left: 30px;
   padding-right: 0;
   > div::after {
    left: -7.5px;
    transform: rotate(225deg);
   }
   > div > span {
    right: auto;
    left: -40px;
   }
  }
`

const TimelineItemWrapper = styled.div`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 25px;
    position: relative;
    width: 400px;
    max-width: 70%;
    text-align: right;
    color: black;
    ::after {
      content: ' ';
      background-color: #fff;
      box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
      position: absolute;
      right: -7.5px;
      top: calc(50% - 7.5px);
      transform: rotate(45deg);
      width: 15px;
      height: 15px;
    }
`
const Date = styled.div`
  font-size: 12px;
`
const Circle = styled.span`
    background-color: ${Colors.greenBlue};
    border: 3px solid ${Colors.greenBlue};
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
`
const Link = styled.a`
  font-size: 12px;
  color: ${Colors.greenBlue};
  word-break: break-word;
`

const Timeline = ({ data }) => (
 <TimelineContainer>
    {data.map((dataItem, idx) => (
      <TimelineItem key={idx}>
        <TimelineItemWrapper>
          <Date>{dataItem.node.frontmatter.date}</Date>
          <div>{dataItem.node.frontmatter.title}</div>
          <Link href={dataItem.node.frontmatter.url}>{dataItem.node.frontmatter.url}</Link>
          <Circle/>
        </TimelineItemWrapper>
        </TimelineItem>
      ))
    }
  </TimelineContainer>
)

Timeline.propTypes = {
  data: PropTypes.array,
}

export { Timeline }

