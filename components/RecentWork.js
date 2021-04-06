import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from '../components/ButtonSecondary'
import Masonry from './Masonry'

const Wrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  }
`
const Text = styled.p`
  text-transform: capitalize;
  font-weight: 700;
`

const RecentWork = () => {
  return (
    <GridContainer>
      <Wrapper>
        <Text>recent work</Text>
        <Masonry
          topLeftImg="/input-mockup.png"
          topLeftLink="/work/input"
          btmLeftImg="/5-prototype.gif"
          btmLeftLink="/work/5"
          rightImg="/tmi.gif"
          rightLink="/work/tmi"
        />
        <ButtonSecondary title="view work" link="/work" marginTop="3.2rem" />
      </Wrapper>
    </GridContainer>
  )
}

export default RecentWork
