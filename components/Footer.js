import React from 'react'
import styled from 'styled-components'
import { GridContainer } from '../styles'
import Link from 'next/link'

const FooterWrapper = styled.footer`
  margin-top: 9.6rem;
`
const NameWrapper = styled.div`
  grid-column: 3 / span 2;
`
const ContactWrapper = styled.div`
  grid-column: 6 / span 2;
`
const AllRightsWrapper = styled.div`
  grid-column: 9 / span 2;
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
            <ATag>/now</ATag>
          </Link>
        </NameWrapper>
        <ContactWrapper>
          <Text>contact</Text>
          <ATag href="mailto:hi@joshuagalinato.com">hi@joshuagalinato.com</ATag>
        </ContactWrapper>
        <AllRightsWrapper>
          <Text>all rights reserved</Text>
          <NoTag>copyright &copy; 2021</NoTag>
        </AllRightsWrapper>
      </GridContainer>
    </FooterWrapper>
  )
}

export default Footer
