import React from 'react'
import { Wrapper } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from '../components/ButtonSecondary'
import Masonry from './Masonry'

const Text = styled.p`
  text-transform: capitalize;
  font-weight: 700;
`
const RecentWork = () => {
  return (
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
  )
}

export default RecentWork
