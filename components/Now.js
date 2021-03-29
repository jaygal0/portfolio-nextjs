import React, { useEffect, useRef, useState } from 'react'
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
  margin-top: -1.6rem;
`

const Now = () => {
  // To figure out my age
  const { update, location, book, projects } = data
  let a = moment(new Date())
  let b = moment([1989, 6, 30])

  let years = a.diff(b, 'year')
  b.add(years, 'years')

  let months = a.diff(b, 'months')
  b.add(months, 'months')

  let days = a.diff(b, 'days')

  // Death Clock Countdown
  const [timerYears, setTimerYears] = useState('00')
  const [timerMonths, setTimerMonths] = useState('00')
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date('October 8, 2080 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const yearsCount = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
      const monthsCount = Math.floor(distance / (1000 * 60 * 60 * 24 * 30))
      const daysCount = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hoursCount = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutesCount = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      )
      const secondsCount = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerYears(yearsCount)
        setTimerMonths(monthsCount)
        setTimerDays(daysCount)
        setTimerHours(hoursCount)
        setTimerMinutes(minutesCount)
        setTimerSeconds(secondsCount)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <GridContainer>
      <NowWrapper>
        <h5>age</h5>
        <p>
          {years === 0 ? null : `${years} years`}
          {months === 0 ? null : `, ${months} months`}{' '}
          {days === 0 ? null : `& ${days} days`} old.
        </p>

        <h5>countdown</h5>
        <p>
          A simple reminder that I'm not going to be here forever and to
          appreciate what I have now:
        </p>
        <p>
          {timerYears === 0 ? null : `${timerYears} years`}
          {timerMonths > 12 ? null : `, ${timerMonths} months`}
          {timerMonths > 1 ? null : `, ${timerDays} days`}
          {timerHours === 0 ? null : `, ${timerHours} hours`}
          {timerMinutes === 0 ? null : `, ${timerMinutes} minutes`}
          {timerSeconds === 0 ? null : ` and ${timerSeconds} seconds`} left
          until I kick the bucket.
        </p>
        <Updated>
          Data taken from{' '}
          <a href="https://www.death-clock.org/" target="_blank">
            this site.
          </a>
        </Updated>

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
