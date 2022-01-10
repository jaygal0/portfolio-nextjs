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
      <h5>Recovering</h5>
      <p>
        I was supposed to spend the past 2 weeks resting, celebrating the
        festivities and working on my own projects. In the end, I spent majority
        of my time sick with Covid. Thankfully, I've recovered from the worst of
        it all. I just need take it easy until I'm fully healed.
      </p>
    </Wrapper>
  )
}

export default NowDetail
