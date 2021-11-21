import React from 'react'
import { Wrapper } from '../styles'
import styled from 'styled-components'
import Link from 'next/link'
import theme from '../styles/theme'

const TitleWrapper = styled.div`
  flex: 2;
  margin: 3.2rem 0 9.6rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin: 3.2rem 0 5.6em 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneSmall}) {
    margin: 3.2rem 0 3.2em 0;
  }
`
const ImageWrapper = styled.div`
  width: 62%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  transform: translate(1rem, 7rem);

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    width: 50%;
    transform: translate(2rem, 18rem);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    transform: translate(1rem, 17rem);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: none;
  }
`

const Josh = styled.span`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.lightGreen};
  transition: ${({ theme }) => theme.transition.link};
  &:hover {
    background: none;
    border-bottom: solid 3px ${({ theme }) => theme.color.lightGreen};
    color: ${({ theme }) => theme.color.lightGreen};
    cursor: pointer;
  }
`
const Design = styled.span`
  transition: ${({ theme }) => theme.transition.link};
  &:hover {
    font-family: 'Lora', serif;
    color: ${({ theme }) => theme.color.darkGreen};
    cursor: pointer;
  }
`
const Code = styled.span`
  &:hover {
    font-family: 'Libre Barcode 39', cursive;
    color: ${({ theme }) => theme.color.lightGreen};
    letter-spacing: 1.6rem;
    line-height: 1.2rem;
    cursor: pointer;
  }
`
const SolveProblems = styled.span`
  transition: ${({ theme }) => theme.transition.link};
  &:hover {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.color.green};
    color: white;
    cursor: pointer;
  }
`

const HeroHeadingIndex = ({ children }) => {
  return (
    <Wrapper className={'align-center-hero'}>
      <TitleWrapper>
        <h2>
          hi, I'm{' '}
          <Link href="/now">
            <Josh>Joshua Galinato</Josh>
          </Link>
        </h2>
        <h1>
          i{' '}
          <Link href="/projects">
            <Design>design</Design>
          </Link>
          , <br />
          <Link href="/projects">
            <Code>code</Code>
          </Link>{' '}
          &amp; <br />
          <Link href="/projects">
            <SolveProblems>
              solve
              <br /> problems
            </SolveProblems>
          </Link>
        </h1>
      </TitleWrapper>
      <ImageWrapper>{children}</ImageWrapper>
    </Wrapper>
  )
}

export default HeroHeadingIndex
