import React, { useRef, useEffect } from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const SkillWrapper = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 15%;
  padding: 10%;
  border-radius: 3.2rem;
  position: relative;
`
const TextWrapper = styled.div`
  margin-left: 3.2rem;
  width: 100%;
`
const Subtitle = styled.p`
  font-size: 1.6rem;
  text-transform: capitalize;
  margin-bottom: 0rem;
`
const ProgramName = styled.p`
  font-size: 2.4rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 1.6rem;
`
const ProgressBar = styled.div`
  width: 100%;
  height: 2.4rem;
  background: ${({ theme }) => theme.color.grey};
  border-radius: 3.2rem;
  position: relative;
`
const ProgressLevel = styled.div`
  position: absolute;
  border-radius: 3.2rem;
  height: 2.4rem;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.lightGreen};

  &.five {
    width: 50%;
  }
  &.six {
    width: 60%;
  }
  &.seven {
    width: 70%;
  }
  &.eight {
    width: 80%;
  }
  &.nine {
    width: 90%;
  }
  &.nine-five {
    width: 95%;
  }
`

const LineBreak = styled.div`
  grid-column: 3 / span 8;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.grey};
  width: 100%;
  margin: 3.2rem 0;
`

const SkillApp = ({ src, subtitle, programName, level }) => {
  gsap.registerPlugin(ScrollTrigger)
  let animateBar = useRef(null)
  let app = useRef(null)
  let text = useRef(null)

  useEffect(() => {
    gsap.from(app, {
      duration: 2,
      ease: 'elastic',
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: app,
        // markers: true,
        toggleActions: 'play pause resume reset',
      },
    })
    gsap.from(animateBar, {
      duration: 2,
      ease: 'power2',
      width: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: animateBar,
        // markers: true,
        toggleActions: 'play pause resume reset',
      },
    })
  })
  return (
    <GridContainer>
      <SkillWrapper>
        <ImageWrapper
          ref={(el) => {
            app = el
          }}
        >
          <Image src={src} layout="fill" quality={100} />
        </ImageWrapper>
        <TextWrapper>
          <Subtitle>{subtitle}</Subtitle>
          <ProgramName>{programName}</ProgramName>
          <ProgressBar>
            <ProgressLevel
              ref={(el) => {
                animateBar = el
              }}
              className={level}
            />
          </ProgressBar>
        </TextWrapper>
      </SkillWrapper>
      <LineBreak />
    </GridContainer>
  )
}

export default SkillApp
