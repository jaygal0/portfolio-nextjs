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
      <h5>Settling into the new house</h5>
      <p>
        We moved into the new house about 2 weeks ago and I'm finally starting
        to feel that we're settling in. We still have loads to do, but I'm sure
        we'll get there sure enough!
      </p>
    </Wrapper>
  )
}

export default NowDetail
