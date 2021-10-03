import React from 'react'
import { GridContainer, Wrapper } from '../styles'
import styled from 'styled-components'

const PostWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
const Heading = styled.h1`
  margin-bottom: 1.6rem;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 8rem;
  }
`
const Subheading = styled.h2`
  margin-bottom: 9.6rem;
`

const Post = ({ heading, subheading, published, children }) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
      <p>{published}</p>
      {children}
    </Wrapper>
  )
}

export default Post
