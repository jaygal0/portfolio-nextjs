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
      <h5>Redesigning this site</h5>
      <p>
        I'm in the process of redesigning this website, I've always wanted to do
        it, I just never had the time. Now this is prioritised, I get to play
        with both design and development again.
      </p>
    </Wrapper>
  )
}

export default NowDetail
