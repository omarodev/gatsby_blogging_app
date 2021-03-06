import styled from 'styled-components'
import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import { PaddingDiv, HorizontalLine, RoundBtn, RobotoText } from '../components'

const PostSummary = ({ blog, style, blackTheme, hideContent }) => {
  const { fields: { title, content }, sys } = blog
  const bgColor = blackTheme ? '#000' : '#fff'
  const btnColor = blackTheme ? '#fff' : '#013ebf'
  const btnBgColor = blackTheme ? '#013ebf' : '#fff'
  return (
    <Container style={style}>
      <PaddingDiv bottom={20}>
        <RoundBtn
          link={sys && `/blogs/?id=${ sys.id }`}
          style={{
            borderRadius: 18,
            border: `solid 1px #979797`,
            padding: '8px 20px',
            fontWeight: 900
          }}
          size={12}
          bgcolor="transparent"
          color={bgColor}
        >
          WAY OF WORK
        </RoundBtn>
      </PaddingDiv>
      <div style={{ minHeight: hideContent ? 120 : 0 }}>
        <RobotoText color={bgColor} size="24" weight="600">
          {!hideContent && title}
          {hideContent &&
            <LinesEllipsis
              text={title}
              maxLine={2}
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
          }
        </RobotoText>
        <PaddingDiv top={10} bottom={20}>
          <HorizontalLine size={60} color={bgColor} height={3} />
        </PaddingDiv>
      </div>
      {!hideContent && (
        <PaddingDiv
          bottom={35}
          style={{
            minHeight: 100,
            opacity: 0.8,
          }}
        >
          <RobotoText color={bgColor} size="16" weight="300">
            <LinesEllipsis
              text={content.replace(/<[^>]+>/g, '')}
              maxLine={4}
              ellipsis='...'
              trimRight
              basedOn='words'
            />
          </RobotoText>
        </PaddingDiv>
      )}
      <PaddingDiv>
        <RoundBtn link={sys && `/blogs/${ sys.id }/`} size={16} bgcolor={btnBgColor} color={btnColor} >Read more</RoundBtn>
      </PaddingDiv>
    </Container>
  )
}

const Container = styled.article`
  text-align: left;
  min-width: 300px;

  &:nth-child(even) {
    padding-left: 15px;
  }
  &:nth-child(odd) {
    padding-right: 15px;
  }

  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`

export default PostSummary
