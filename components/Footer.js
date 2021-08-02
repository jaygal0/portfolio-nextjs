import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../styles'
import Link from 'next/link'
import moment from 'moment'
import CookieConsent from 'react-cookie-consent'

const NameWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / span 4;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 1.6rem;
    grid-column: 1 / -1;
  }
`
const ContactWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 6 / span 3;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 1.6rem;
    grid-column: 1 / -1;
  }
`
const AllRightsWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 10 / span 3;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 1.6rem;
    grid-column: 1 / -1;
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
const PrivacyPolicy = styled.p`
  display: inline;
  font-size: ${({ theme }) => theme.font.desktop.meta};
  line-height: ${({ theme }) => theme.lineHeight.desktop.meta};
  text-transform: capitalize;
  text-decoration: underline;
  margin: 0.8rem 0 0 0;
  transition: ${({ theme }) => theme.transition.link};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.green};
  }
`

const Footer = () => {
  return (
    <Wrapper className="footer">
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
      <CookieConsent cookieName="galina.to" disableStyles={true} expires={30}>
        This website uses cookies to enhance the user experience.{' '}
        <Link href="/privacy">
          <PrivacyPolicy>privacy policy</PrivacyPolicy>
        </Link>
      </CookieConsent>
    </Wrapper>
  )
}

export default Footer
