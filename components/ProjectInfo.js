import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../styles'

const Title = styled.h3`
  grid-column: 3 / span 8;
  margin: 3.2rem 0 2.4rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
const Text = styled.p`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

const ProjectInfo = ({ title, text }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default ProjectInfo
