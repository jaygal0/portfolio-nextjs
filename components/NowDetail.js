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
      <h5>Working out again</h5>
      <p>
        I've been all over the place over the past few months. It's time to hit
        the reset button and start working out as per usual. As I always say, if
        you don't have your health then what do you have?
      </p>
    </Wrapper>
  )
}

export default NowDetail
