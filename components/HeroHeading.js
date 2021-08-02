import React from 'react'
import { GridContainer, Wrapper } from '../styles'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  margin: 3.2rem 0 9.6rem 0;
  width: 80%;
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
`

const HeroHeading = ({ title, subtitle, children }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </TitleWrapper>
      <ImageWrapper>{children}</ImageWrapper>
    </Wrapper>
  )
}

export default HeroHeading
