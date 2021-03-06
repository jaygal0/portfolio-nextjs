import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3.2rem;
  gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

const PortfolioFlex = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>
}

export default PortfolioFlex
