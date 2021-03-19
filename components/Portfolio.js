import React from 'react'
import { GridContainer } from '../styles'
import Masonry from '../components/Masonry'
import PortfolioFlex from './PortfolioFlex'
import PortfolioSquare from './PortfolioSquare'
import PortfolioRectangle from './PortfolioRectangle'

const Portfolio = () => {
  return (
    <GridContainer>
      <Masonry
        topLeftImg="/logo.svg"
        topLeftLink="/work/input"
        btmLeftImg="/logo.svg"
        btmLeftLink="/work/bind"
        rightImg="/logo.svg"
        rightLink="/work/tmi"
      />
      <PortfolioFlex>
        <PortfolioRectangle href="/work/vol" src="/logo.svg" />
        <PortfolioSquare href="/work/reload-sessions" src="/logo.svg" />
        <PortfolioSquare href="/work/kawaii-corner-shop" src="/logo.svg" />
        <PortfolioRectangle href="work/photos" src="/photos-ebony.jpg" />
      </PortfolioFlex>
    </GridContainer>
  )
}

export default Portfolio
