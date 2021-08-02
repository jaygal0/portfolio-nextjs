import React from 'react'
import { GridContainer, Wrapper } from '../styles'
import Masonry from '../components/Masonry'
import PortfolioFlex from './PortfolioFlex'
import PortfolioSquare from './PortfolioSquare'
import PortfolioRectangle from './PortfolioRectangle'

const Portfolio = () => {
  return (
    <Wrapper>
      <Masonry
        topLeftImg="/input-mockup.png"
        topLeftLink="/work/input"
        btmLeftImg="/bind-thumbnail.png"
        btmLeftLink="/work/bind"
        rightImg="/tmi.gif"
        rightLink="/work/tmi"
      />
      <PortfolioFlex>
        <PortfolioRectangle href="/work/5" src="/5-prototype-wide.gif" />
        <PortfolioRectangle href="/work/vol" src="/vol-banner.jpg" />
        <PortfolioSquare href="/work/reload-sessions" src="/reload-logo.svg" />
        <PortfolioSquare
          href="/work/kawaii-corner-shop"
          src="/kawaii-asset-2.png"
        />
        <PortfolioRectangle href="work/photos" src="/photos-ebony.jpg" />
      </PortfolioFlex>
    </Wrapper>
  )
}

export default Portfolio
