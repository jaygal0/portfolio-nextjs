import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import data from '../data/now'

const NowWrapper = styled.div`
  grid-column: 3 / span 8;
`

const Now = () => {
  const { update, location, book } = data
  return (
    <GridContainer>
      <NowWrapper>
        <p>{`Location: ${location.city}, ${location.country}`}</p>
      </NowWrapper>
    </GridContainer>
  )
}

export default Now
