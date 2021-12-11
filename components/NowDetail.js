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
      <h5>Working on my own projects</h5>
      <p>
        Whenever there's free time I try to work on my own projects. It's
        difficult balancing work and everything else, but it's important that I
        do this otherwise I will go mad.
      </p>
    </Wrapper>
  )
}

export default NowDetail
