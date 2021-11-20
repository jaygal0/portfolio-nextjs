import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.grey};
  padding: 4.8rem;
  border-radius: 15px;
  margin: 4rem 0;
`

const NowDetail = () => {
  return (
    <Wrapper>
      <h5>Working out</h5>
      <p>
        I've been making my health a priority again and have been working out
        first thing in the morning. I feel great!
      </p>
    </Wrapper>
  )
}

export default NowDetail
