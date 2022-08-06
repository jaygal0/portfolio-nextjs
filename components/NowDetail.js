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
      <h5>Taking it easy</h5>
      <p>
        It's the last few days of my holiday and so I thought I'd take it easy,
        clean up a few of my files, finish off a few tasks and hang out with my
        partner. Nothing more.
      </p>
    </Wrapper>
  )
}

export default NowDetail
