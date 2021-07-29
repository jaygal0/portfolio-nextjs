import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'

const BlogWrapper = styled.article`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 3.2rem;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: flex;
    flex-direction: column;
  }
`
const Heading = styled.h3`
  grid-column: 1 / span 5;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.green};
    transition: ${({ theme }) => theme.transition.link};
  }
`
const TextWrapper = styled.div`
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
  border-bottom: 0.1px solid ${({ theme }) => theme.color.line};
  margin: 3.2rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

const BlogList = ({ heading, subheading, published, snippet, slug }) => {
  return (
    <GridContainer>
      <BlogWrapper>
        <Link href={`blog/${slug}`}>
          <Heading>{heading}</Heading>
        </Link>
        <TextWrapper>
          <Published>published: {published}</Published>
          <h5>{subheading}</h5>
          <Snippet>{`${snippet.substr(0, 70)} ...`}</Snippet>
          <ButtonSecondary title="read more" link={`blog/${slug}`} />
        </TextWrapper>
      </BlogWrapper>
      <LineBreak />
    </GridContainer>
  )
}

export default BlogList
