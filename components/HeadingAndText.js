import React from 'react'
import { GridContainer } from '../styles'
import ButtonSecondary from './ButtonSecondary'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  grid-column: 3 / span 4;
`
const Text = styled.div`
  grid-column: 7 / span 4;
`
const HeadingAndText = ({ title, children }) => {
  return (
    <GridContainer className="align-center">
      <TitleWrapper>
        <h3>{title}</h3>
      </TitleWrapper>
      <Text>
        {children}
        <ButtonSecondary title="view my skills" link="/skills" />
      </Text>
    </GridContainer>
  )
}

export default HeadingAndText
