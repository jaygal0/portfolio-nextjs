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
        topLeftLink="#"
        btmLeftImg="/logo.svg"
        btmLeftLink="#"
        rightImg="/logo.svg"
        rightLink="#"
      />
      <PortfolioFlex>
        <PortfolioSquare href="#" src="/logo.svg" />
        <PortfolioSquare href="#" src="/logo.svg" />
        <PortfolioRectangle href="#" src="/logo.svg" />
      </PortfolioFlex>
    </GridContainer>
  )
}

export default Portfolio
