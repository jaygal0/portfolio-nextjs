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
        href="projects/galinato"
        src="/galinato-cover.png"
        marginBottom
      />
      <PortfolioRectangle
        href="projects/link"
        src="/link-cover.png"
        marginBottom
      />
      <PortfolioRectangle
        href="projects/commonplace-book"
        src="/commonplace-book.png"
        marginBottom
      />
      <ButtonSecondary title="view work" link="/projects" marginTop="3.2rem" />
    </Wrapper>
  )
}

export default RecentWork
