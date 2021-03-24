import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'

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
  background: ${({ theme }) => theme.color.lightGreen};
  color: white;
  &:hover {
    background: none;
    color: ${({ theme }) => theme.color.lightGreen};
    cursor: pointer;
  }
`
const NoTag = styled.a`
  text-decoration: none;
`
const NoTagHeading = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`
const Design = styled.span`
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
          hi, i'm{' '}
          <NoTag href="/now">
            <Josh>josh</Josh>
          </NoTag>
        </h2>
        <h1>
          i{' '}
          <NoTagHeading href="/work">
            <Design>design</Design>
          </NoTagHeading>
          ,{' '}
          <NoTagHeading href="/work">
            <Code>code</Code>
          </NoTagHeading>{' '}
          &amp;{' '}
          <NoTagHeading href="/work">
            <SolveProblems>solve problems</SolveProblems>
          </NoTagHeading>
        </h1>
      </TitleWrapper>
      <ImageWrapper>{children}</ImageWrapper>
    </GridContainer>
  )
}

export default HeroHeadingIndex
