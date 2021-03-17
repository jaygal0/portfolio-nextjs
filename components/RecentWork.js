import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from '../components/ButtonSecondary'
import Masonry from './Masonry'

const Wrapper = styled.div`
  grid-column: 3 / span 2;
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
          topLeftImg="/logo.svg"
          topLeftLink="#"
          btmLeftImg="/logo.svg"
          btmLeftLink="#"
          rightImg="/logo.svg"
          rightLink="#"
        />
        <ButtonSecondary title="view work" link="/work" marginTop="3.2rem" />
      </Wrapper>
    </GridContainer>
  )
}

export default RecentWork
