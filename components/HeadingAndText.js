import React from 'react'
import { Wrapper } from '../styles'
import ButtonSecondary from './ButtonSecondary'
import styled from 'styled-components'

const TitleWrapper = styled.div``
const Text = styled.div``

const HeadingAndText = ({ title, children }) => {
  return (
    <Wrapper className="flexbox">
      <TitleWrapper>
        <h3>{title}</h3>
      </TitleWrapper>
      <Text>
        {children}
        <ButtonSecondary title="view my skills" link="/skills" />
      </Text>
    </Wrapper>
  )
}

export default HeadingAndText
