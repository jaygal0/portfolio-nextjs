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
      <h5>Sorting out my office</h5>
      <p>
        After weeks of having all of my stuff on the floor in my new office, I
        finally made some progress by getting a desk, putting up some shelves
        and organising my room. I still have a long way to go, but at least I
        have some sort of order in my office now.
      </p>
    </Wrapper>
  )
}

export default NowDetail
