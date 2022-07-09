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
      <h5>Settling into my new role</h5>
      <p>
        I started my new role as UX Lead Designer at Orbi just under a month
        ago. It took a while to settle in, but I'm starting to understand and
        navigate my way around the company. There's loads to do, but I'm having
        a blast!
      </p>
      <p>
        Ironically, I've now started my summer holidays so I have to shut down
        my work mindset and enjoy my semester. It'll be difficult, but I'll give
        it a go.
      </p>
    </Wrapper>
  )
}

export default NowDetail
