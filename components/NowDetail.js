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
      <h5>Sticking to my routines</h5>
      <p>
        Over the past few days I've been consistent with my habits and I feel
        great about it. Hopefully, I can keep it up!
      </p>
    </Wrapper>
  )
}

export default NowDetail
