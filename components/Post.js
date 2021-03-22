import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'

const PostWrapper = styled.div`
  grid-column: 3 / span 8;
`
const Heading = styled.h1`
  margin-bottom: 1.6rem;
`
const Subheading = styled.h2`
  margin-bottom: 9.6rem;
`

const Post = ({ heading, subheading, published, children }) => {
  return (
    <GridContainer>
      <PostWrapper>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
        <p>{`Published: ${published}`}</p>
        {children}
      </PostWrapper>
    </GridContainer>
  )
}

export default Post
