import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from '../components/ButtonSecondary'

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
        <ButtonSecondary title="view work" link="/work" />
      </Wrapper>
    </GridContainer>
  )
}

export default RecentWork
