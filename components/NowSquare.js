import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: calc(50% - 3.2rem);
  height: 395px;
  background: ${({ theme }) => theme.color.grey};
  padding: 2.4rem;
  border-radius: 15px;
  margin-bottom: 4rem;
`

const NowSquare = ({ title }) => {
  return (
    <Wrapper>
      <h5>{title}</h5>
    </Wrapper>
  )
}

export default NowSquare
