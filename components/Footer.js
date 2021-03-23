import React from 'react'
import styled from 'styled-components'
import { GridContainer } from '../styles'
import Link from 'next/link'
import moment from 'moment'

const FooterWrapper = styled.footer`
  margin-top: 9.6rem;
`
const NameWrapper = styled.div`
  grid-column: 3 / span 2;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / span 4;
  }
`
const ContactWrapper = styled.div`
  grid-column: 6 / span 2;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 6 / span 3;
  }
`
const AllRightsWrapper = styled.div`
  grid-column: 9 / span 2;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 10 / span 3;
  }
`
const Text = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: 0;
  font-weight: bold;
  text-transform: capitalize;
`
const ATag = styled.a`
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  text-decoration: none;
  color: black;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.lightGreen};
  }
`
const NoTag = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  text-transform: capitalize;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <GridContainer>
        <NameWrapper>
          <Text>joshua galinato</Text>
          <Link href="/now">
            <ATag>what i'm doing now</ATag>
          </Link>
        </NameWrapper>
        <ContactWrapper>
          <Text>contact</Text>
          <ATag href="mailto:hi@joshuagalinato.com">email me</ATag>
        </ContactWrapper>
        <AllRightsWrapper>
          <Text>copyright &copy; {moment().format('YYYY')}</Text>
          <NoTag>all rights reserved</NoTag>
        </AllRightsWrapper>
      </GridContainer>
    </FooterWrapper>
  )
}

export default Footer
