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
      <h5>Back to the grind</h5>
      <p>
        It's my second week back from the holidays, I'm slowly getting back to
        the swing of work life.
      </p>
    </Wrapper>
  )
}

export default NowDetail
