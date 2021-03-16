import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  margin: 3.2rem 0 9.6rem 0;
  grid-column: 3 / span 6;
`

const HeroHeading = ({ title, subtitle }) => {
  return (
    <GridContainer>
      <TitleWrapper>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </TitleWrapper>
    </GridContainer>
  )
}

export default HeroHeading
