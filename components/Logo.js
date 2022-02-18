import React from 'react'
import { Wrapper, Text } from '../styles'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  height: min-content;
  background: #fafafa;
  display: flex;
  padding: 5.4rem 3.2rem;
  justify-content: space-between;
  border-radius: 1.5rem;
  margin-bottom: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    flex-direction: column;
    height: 48rem;
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <Text>Previously designed for</Text>
      <Container>
        <Image className="logo" src="/volvo.svg" width={104} height={103.79} />
        <Image className="logo" src="/delaval.svg" width={232} height={40.41} />
        <Image
          className="logo"
          src="/star-republic.svg"
          width={232}
          height={93.9}
        />
      </Container>
    </Wrapper>
  )
}

export default Logo
