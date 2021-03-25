import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const ImageWrapper = styled.div`
  position: fixed;
  right: 4.8rem;
  bottom: 4.8rem;
  z-index: 10;
  opacity: 0;
  transition: ${({ theme }) => theme.transition.scrollDisappear};
  -webkit-transform: scale(0.7);

  &.show-scroll {
    opacity: 1;
    transition: ${({ theme }) => theme.transition.scrollAppear};
    -webkit-transform: scale(1);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    right: 1.6rem;
    bottom: 1.6rem;
  }
`

const Scroll = () => {
  const [showOnScroll, setShowOnScroll] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < prevPos.y) setShowOnScroll(true)
    if (currPos.y >= 0) setShowOnScroll(false)
  })

  return (
    <ImageWrapper
      className={showOnScroll ? 'show-scroll' : ''}
      onClick={() => scroll.scrollToTop()}
    >
      <Image src="/scroll.svg" width={62.89} height={59.66} />
    </ImageWrapper>
  )
}

export default Scroll
