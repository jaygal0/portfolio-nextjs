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
      <h5>bought a car</h5>
      <p>
        After hours of driving across Sweden, we finally have our very first car
        that we purchased sitting on the driveway.
      </p>
    </Wrapper>
  )
}

export default NowDetail
