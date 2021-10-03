import React from 'react'
import { GridContainer, Wrapper } from '../styles'
import styled from 'styled-components'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'

const BlogWrapper = styled.article`
  display: flex;
  gap: 3.2rem;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`
const Heading = styled.h3`
  flex: 2;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.green};
    transition: ${({ theme }) => theme.transition.link};
  }
`
const TextWrapper = styled.div`
  flex: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: flex;
    flex-direction: column;
  }
`
const Published = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.meta};
  line-height: ${({ theme }) => theme.lineHeight.desktop.meta};
  margin-bottom: 1.6rem;
  text-transform: capitalize;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    order: 2;
  }
`
const SubHeading = styled.h5`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    order: 1;
  }
`
const Snippet = styled.p`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    order: 1;
  }
`
const LineBreak = styled.div`
  grid-column: 3 / span 8;
  border-bottom: 0.1px solid ${({ theme }) => theme.color.line};
  margin: 3.2rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    order: 1;
  }
`

const BlogList = ({ heading, subheading, published, snippet, slug }) => {
  return (
    <Wrapper>
      <BlogWrapper>
        <Link href={`blog/${slug}`}>
          <Heading>{heading}</Heading>
        </Link>
        <TextWrapper>
          <Published>{published}</Published>
          <SubHeading>{subheading}</SubHeading>
          <Snippet>{snippet}</Snippet>
          <ButtonSecondary title="read more" link={`blog/${slug}`} blog />
        </TextWrapper>
      </BlogWrapper>
      <LineBreak />
    </Wrapper>
  )
}

export default BlogList
