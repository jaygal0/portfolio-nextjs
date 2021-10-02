import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from '../styles'
import styled from 'styled-components'
import data from '../data/now'
import NowDetail from './NowDetail'
import moment from 'moment'
import uuid from 'react-uuid'

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
const OneLiner = styled.p`
  margin-top: 0.8rem;
`

const Now = ({ rapidRating, blitzRating }) => {
  // To figure out my age
  const { update, location, books, projects, job } = data
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
    <Wrapper>
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
        {(timerHours === 0 && ' ') ||
          (timerHours === 1 && `, ${timerHours} hour`) ||
          `, ${timerHours} hours`}
        {(timerMinutes === 0 && ' ') ||
          (timerMinutes === 1 && `, ${timerMinutes} minute`) ||
          `, ${timerMinutes} minutes`}
        {(timerSeconds === 0 && ' ') ||
          (timerSeconds === 1 && ` & ${timerSeconds} second `) ||
          ` & ${timerSeconds} seconds `}
        until I kick the bucket.
      </p>
      <Updated>
        Data taken from{' '}
        <a href="https://www.death-clock.org/" target="_blank">
          death-clock.org.
        </a>
      </Updated>

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
              <OneLiner>{oneLiner}</OneLiner>
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
