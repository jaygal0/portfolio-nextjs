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
      <h5>Cleaning up all of my projects</h5>
      <p>
        I want to refactor/redesign a few old projects that I've done in the
        past before I start anything new. It's pretty interesting to look back
        and review my work, sometimes I question what I was thinking at the
        time.
      </p>
    </Wrapper>
  )
}

export default NowDetail
