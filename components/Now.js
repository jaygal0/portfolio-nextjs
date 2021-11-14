import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from '../styles'
import styled from 'styled-components'
import data from '../data/now'
import NowDetail from './NowDetail'
import NowAge from './NowAge'
import NowChess from './NowChess'
import NowCountdown from './NowCountdown'
import NowSquare from './NowSquare'

const Updated = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.meta};
  margin-top: 1.6rem;
`
const SquareWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`

const Now = ({ rapidRating, blitzRating }) => {
  const { update, location, books, projects, job } = data

  return (
    <Wrapper>
      <NowAge />
      <NowCountdown />
      <SquareWrapper>
        <NowSquare
          title="Location"
          img={location.img}
          text={`${location.city}, ${location.country}`}
        />
        <NowSquare
          title="Profession"
          imgAlt={job.img}
          text={job.title}
          link={job.website}
        />
        <NowSquare
          title="Reading"
          imgReading={books.img}
          text={books.title}
          link={books.link}
        />
        <NowChess
          title="Lichess Rating"
          blitz={blitzRating}
          rapid={rapidRating}
        />
      </SquareWrapper>
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
