import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Wrapper } from '../styles'

const ImageWrapper = styled.div`
  grid-column: 2 / span 10;
  width: 100%;
  padding: 30%;
  position: relative;
  background: ${({ theme }) => theme.color.grey};
  border-radius: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
    margin-top: 3rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
    margin-top: 3rem;
  }
`

const PortfolioHero = ({ src }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          quality={75}
          className="border-image"
        />
      </ImageWrapper>
    </Wrapper>
  )
}

export default PortfolioHero
