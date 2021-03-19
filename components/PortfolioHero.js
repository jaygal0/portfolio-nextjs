import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import Image from 'next/image'

const ImageWrapper = styled.div`
  grid-column: 2 / span 10;
  width: 100%;
  padding: 30%;
  position: relative;
`

const PortfolioHero = ({ src }) => {
  return (
    <GridContainer>
      <ImageWrapper>
        <Image src={src} layout="fill" quality={100} className="border-image" />
      </ImageWrapper>
    </GridContainer>
  )
}

export default PortfolioHero
