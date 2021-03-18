import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from './ButtonSecondary'

const BlogWrapper = styled.article`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 3.2rem;
  align-items: center;
`
const Heading = styled.h3`
  grid-column: 1 / span 5;
`
const TextWrapper = styled.p`
  grid-column: 6 / span 3;
`
const Published = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.meta};
  line-height: ${({ theme }) => theme.lineHeight.desktop.meta};
  margin-bottom: 1.6rem;
  text-transform: capitalize;
`
const Snippet = styled.p``
const LineBreak = styled.div`
  grid-column: 3 / span 8;
  border-bottom: 0.1px solid grey;
  margin: 3.2rem 0;
`

const BlogList = ({ heading, subheading, published, snippet }) => {
  return (
    <GridContainer>
      <BlogWrapper>
        <Heading>{heading}</Heading>
        <TextWrapper>
          <Published>published: {published}</Published>
          <Snippet>{snippet}</Snippet>
          <ButtonSecondary title="read more" link="#" />
        </TextWrapper>
      </BlogWrapper>
      <LineBreak />
    </GridContainer>
  )
}

export default BlogList
