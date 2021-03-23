import React from 'react'
import { GridContainer } from '../styles'
import styled from 'styled-components'
import data from '../data/now'
import NowDetail from './NowDetail'
import moment from 'moment'
import uuid from 'react-uuid'

const NowWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    grid-column: 1 / -1;
  }
`

const Location = styled.p`
  text-transform: capitalize;
`
const Updated = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.meta};
`

const Now = () => {
  const { update, location, book, projects } = data
  let a = moment(new Date())
  let b = moment([1989, 6, 30])

  let years = a.diff(b, 'year')
  b.add(years, 'years')

  let months = a.diff(b, 'months')
  b.add(months, 'months')

  let days = a.diff(b, 'days')

  return (
    <GridContainer>
      <NowWrapper>
        <h5>age</h5>
        <p>
          {years === 0 ? null : `${years} years`}
          {months === 0 ? null : `, ${months} months`}{' '}
          {days === 0 ? null : `& ${days} days`} old.
        </p>

        <h5>location</h5>
        <Location>
          {location.city}, {location.country}
        </Location>
        <h5>reading</h5>
        <ul>
          {book.map((item) => {
            return <li key={uuid()}>{item}</li>
          })}
        </ul>
        <NowDetail />
        <Updated>
          Last updated on {update.month} {update.day}, {update.year}. Inspired
          by{' '}
          <a href="https://sive.rs/nowff" target="_blank">
            Derek Sivers
          </a>
        </Updated>
      </NowWrapper>
    </GridContainer>
  )
}

export default Now
