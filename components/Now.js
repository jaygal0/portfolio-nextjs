import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from '../styles'
import styled from 'styled-components'
import data from '../data/now'
import NowDetail from './NowDetail'
import uuid from 'react-uuid'
import NowAge from './NowAge'
import NowCountdown from './NowCountdown'
import NowSquare from './NowSquare'

const Location = styled.p`
  text-transform: capitalize;
`
const ChessList = styled.ul`
  margin-bottom: 1.6rem;
`
const Updated = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.meta};
  margin-top: 1.6rem;
`
const OneLiner = styled.span`
  margin-top: 0.8rem;
  font-style: italic;
`

const Now = ({ rapidRating, blitzRating }) => {
  const { update, location, books, projects, job } = data

  return (
    <Wrapper>
      <NowAge />
      <NowCountdown />
      <NowSquare title="test" />

      <h5>location</h5>
      <Location>
        {location.city}, {location.country}
      </Location>
      <h5>day job</h5>
      <p>
        {job.title} at{' '}
        <a href={job.website} target="_blank">
          {job.company}
        </a>
      </p>
      <h5>pastime</h5>
      <h6>reading</h6>
      <ul>
        {books.map((item) => {
          const { title, link } = item
          return (
            <li key={uuid()}>
              <a href={link} target="_blank">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
      <h6>chess rating</h6>
      <ChessList>
        <li>Blitz: {blitzRating}</li>
        <li>Rapid: {rapidRating}</li>
      </ChessList>
      <Updated>
        Live updates from{' '}
        <a href="https://lichess.org" target="_blank">
          lichess.org
        </a>
      </Updated>
      <h6>personal projects</h6>
      <ul>
        {projects.map((item) => {
          const { title, link, oneLiner } = item
          return (
            <li key={uuid()}>
              <a href={link} target="_blank">
                {title}
              </a>
              <OneLiner>{` - ${oneLiner}`}</OneLiner>
            </li>
          )
        })}
      </ul>
      <NowDetail />
      <Updated>
        Last updated on {update.month} {update.day}, {update.year}. Inspired by{' '}
        <a href="https://sive.rs/nowff" target="_blank">
          Derek Sivers
        </a>
      </Updated>
    </Wrapper>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://lichess.org/api/account`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Now
