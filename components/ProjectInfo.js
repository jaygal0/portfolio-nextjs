import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'

const Title = styled.h3`
  grid-column: 3 / span 8;
  margin: 3.2rem 0 2.4rem 0;
`
const Text = styled.p`
  grid-column: 3 / span 8;
`

const ProjectInfo = ({ title, text }) => {
  return (
    <GridContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </GridContainer>
  )
}

export default ProjectInfo
