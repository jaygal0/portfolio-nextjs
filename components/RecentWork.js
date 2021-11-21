import React from 'react'
import { Wrapper, Text } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from '../components/ButtonSecondary'
import Masonry from './Masonry'
import PortfolioRectangle from './PortfolioRectangle'

const RecentWork = () => {
  return (
    <Wrapper>
      <Text>recent work</Text>
      <PortfolioRectangle
        href="projects/commonplace-book"
        src="/commonplace-book.png"
        marginBottom
      />
      <Masonry
        topLeftImg="/input-mockup.png"
        topLeftLink="/projects/input"
        btmLeftImg="/5-prototype.gif"
        btmLeftLink="/projects/5"
        rightImg="/tmi.gif"
        rightLink="/projects/tmi"
      />
      <ButtonSecondary title="view work" link="/projects" marginTop="3.2rem" />
    </Wrapper>
  )
}

export default RecentWork
