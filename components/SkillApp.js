import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import Image from 'next/image'

const SkillWrapper = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 15%;
  padding: 10%;
  background: red;
  border-radius: 3.2rem;
  position: relative;
`
const TextWrapper = styled.div`
  margin-left: 3.2rem;
  width: 100%;
`
const Subtitle = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-bottom: 0rem;
`
const ProgramName = styled.p`
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 1.6rem;
`
const ProgressBar = styled.div`
  width: 100%;
  height: 2.4rem;
  background: red;
  border-radius: 3.2rem;
  position: relative;
`
const ProgressLevel = styled.div`
  position: absolute;
  border-radius: 3.2rem;
  height: 2.4rem;
  top: 0;
  left: 0;
  background: blue;

  &.five {
    width: 50%;
    background: black;
  }
  &.six {
    width: 60%;
    background: black;
  }
  &.seven {
    width: 70%;
    background: black;
  }
  &.eight {
    width: 80%;
    background: black;
  }
  &.nine {
    width: 90%;
    background: black;
  }
  &.nine-five {
    width: 95%;
    background: black;
  }
`

const LineBreak = styled.div`
  grid-column: 3 / span 8;
  border-bottom: 0.1px solid grey;
  width: 100%;
  margin: 3.2rem 0;
`

const SkillApp = ({ src, subtitle, programName, level }) => {
  return (
    <GridContainer>
      <SkillWrapper>
        <ImageWrapper>
          <Image src={src} layout="fill" objectFit="cover" quality={100} />
        </ImageWrapper>
        <TextWrapper>
          <Subtitle>{subtitle}</Subtitle>
          <ProgramName>{programName}</ProgramName>
          <ProgressBar>
            <ProgressLevel className={level} />
          </ProgressBar>
        </TextWrapper>
      </SkillWrapper>
      <LineBreak />
    </GridContainer>
  )
}

export default SkillApp
