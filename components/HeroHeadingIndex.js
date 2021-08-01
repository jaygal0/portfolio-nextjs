import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import Link from 'next/link'
import theme from '../styles/theme'

const TitleWrapper = styled.div`
  margin: 3.2rem 0 9.6rem 0;
  grid-column: 3 / span 6;
  grid-row: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
const ImageWrapper = styled.div`
  grid-column: 6 / span 5;
  grid-row: 1;
  z-index: -1;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    transform: translateX(3rem);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    transform: translate(8rem, -9rem);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    transform: translate(6rem, -22rem);
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    transform: translate(4rem, -22rem);
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
    <GridContainer className={'align-center-hero'}>
      <TitleWrapper>
        <h2>
          hi, I'm{' '}
          <Link href="/now">
            <Josh>Joshua Galinato</Josh>
          </Link>
        </h2>
        <h1>
          i{' '}
          <Link href="/work">
            <Design>design</Design>
          </Link>
          ,{' '}
          <Link href="/work">
            <Code>code</Code>
          </Link>{' '}
          &amp;{' '}
          <Link href="/work">
            <SolveProblems>solve problems</SolveProblems>
          </Link>
        </h1>
      </TitleWrapper>
      <ImageWrapper>{children}</ImageWrapper>
    </GridContainer>
  )
}

export default HeroHeadingIndex
