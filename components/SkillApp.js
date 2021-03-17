import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'

const SkillWrapper = styled.div`
  grid-column: 3 / span 8;
`

const ImageWrapper = styled.div`
  width: 25%;
  height: 20px;
  /* padding: ; */
  background: red;
  border-radius: 3.2rem;
`
const TextWrapper = styled.div``
const Subtitle = styled.div``
const ProgramName = styled.div``
const ProgressBar = styled.div``
const LineBreak = styled.div``

const SkillApp = ({ src, subtitle, programName }) => {
  return (
    <GridContainer>
      <SkillWrapper>
        <ImageWrapper></ImageWrapper>
        <TextWrapper>
          <Subtitle>{subtitle}</Subtitle>
          <ProgramName>{programName}</ProgramName>
          <ProgressBar />
          <LineBreak />
        </TextWrapper>
      </SkillWrapper>
    </GridContainer>
  )
}

export default SkillApp
