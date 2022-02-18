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
      <h5>visiting the family</h5>
      <p>
        Living in a different country it&#39;s always difficult to keep in touch
        with your family. After 2 years, I&#39;m finally heading back for the
        weekend to visit them. I&#39;m looking forward to it!
      </p>
    </Wrapper>
  )
}

export default NowDetail
