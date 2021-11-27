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
      <h5>Brazilian Jujitsu</h5>
      <p>
        I had spent my morning rolling with BJJ. My body is aching and I'm sure
        I'm going to feel like this for the rest of the weekend. Still, it's
        great to be training again.
      </p>
    </Wrapper>
  )
}

export default NowDetail
