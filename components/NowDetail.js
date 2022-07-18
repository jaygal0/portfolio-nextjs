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
      <h5>Getting ready for Denmark</h5>
      <p>
        I'm heading off to Denmark tomorrow, so I'm currently cleaning up my
        files and making sure that I have everything I need before the trip. I
        can't forget to clean up the house!
      </p>
    </Wrapper>
  )
}

export default NowDetail
