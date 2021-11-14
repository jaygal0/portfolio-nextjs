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
      <h5>healthy habits</h5>
      <p>
        Lately, I've been pretty poor with keeping up with my healthy habits.
        It's time to hit the reset button and take action.
      </p>
    </Wrapper>
  )
}

export default NowDetail
