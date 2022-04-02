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
      <h5>Settling In</h5>
      <p>
        After living just over a month in our newly bought house, I feel like
        we're slowly settling in. There's still an enless amount of tasks to do,
        which sometimes feels overwhelming, but all we can do is work on one
        task at a time.
      </p>
    </Wrapper>
  )
}

export default NowDetail
