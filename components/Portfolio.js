import React from 'react'
import { Wrapper } from '../styles'
import Masonry from '../components/Masonry'
import PortfolioFlex from './PortfolioFlex'
import PortfolioSquare from './PortfolioSquare'
import PortfolioRectangle from './PortfolioRectangle'

const Portfolio = () => {
  return (
    <Wrapper>
      <PortfolioRectangle
        href="projects/commonplace-book"
        src="/commonplace-book.png"
        marginBottom
      />
      <Masonry
        topLeftImg="/input-mockup.png"
        topLeftLink="/projects/input"
        btmLeftImg="/bind-thumbnail.png"
        btmLeftLink="/projects/bind"
        rightImg="/tmi.gif"
        rightLink="/projects/tmi"
      />
      <PortfolioFlex>
        <PortfolioRectangle href="/projects/5" src="/5-prototype-wide.gif" />
        <PortfolioRectangle href="/projects/vol" src="/vol-banner.jpg" />
        <PortfolioSquare
          href="/projects/reload-sessions"
          src="/reload-logo.svg"
        />
        <PortfolioSquare
          href="/projects/kawaii-corner-shop"
          src="/kawaii-asset-2.png"
        />
        <PortfolioRectangle href="projects/photos" src="/photos-ebony.jpg" />
      </PortfolioFlex>
    </Wrapper>
  )
}

export default Portfolio
