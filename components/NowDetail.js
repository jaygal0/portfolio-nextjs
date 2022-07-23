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
      <h5>Back home</h5>
      <p>
        Got back from Denmark yesterday, hoping to settle back into my normal
        routines and enjoy the rest of my holiday.
      </p>
    </Wrapper>
  )
}

export default NowDetail
