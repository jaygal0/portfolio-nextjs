import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.grey};
  padding: 7.2rem;
  border-radius: 15px;
  margin-bottom: 4rem;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: flex;
    flex-direction: column;
  }
`
const NumAndLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;

  &.fade {
    opacity: 0.1;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: flex;
  }
`
const Num = styled.div`
  font-size: 6.4rem;
  line-height: 7.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    font-size: 4.8rem;
    line-height: 5.6rem;
    width: min-content;
    margin-bottom: 1.6rem;
  }
`
const Label = styled.div`
  margin-top: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    margin-top: 0rem;
    margin-left: 1.6rem;
    font-size: 4.8rem;
    line-height: 5.6rem;
    width: min-content;
  }
`
const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const Updates = styled.p`
  margin-top: 2.4rem;
  font-size: 1.2rem;
  line-height: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: none;
  }
`

const NowCountdown = () => {
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
      <HeadingWrapper>
        <h5>death countdown</h5>
        <Updates>
          Data taken from{' '}
          <a href="https://death-clock.org/" target="_blank">
            death-clock.org
          </a>
        </Updates>
      </HeadingWrapper>
      <Container>
        <NumAndLabel>
          <Num>
            {timerYears === 0
              ? `00`
              : timerYears < 10
              ? `0${timerYears}`
              : `${timerYears}`}
          </Num>
          <Label>years</Label>
        </NumAndLabel>
        <NumAndLabel>
          <Num>
            {timerMonths === 0
              ? `00`
              : timerMonths > 12
              ? `00`
              : timerMonths < 10
              ? `0${timerMonths}`
              : `${timerMonths}`}
          </Num>
          <Label>months</Label>
        </NumAndLabel>{' '}
        <NumAndLabel>
          <Num>
            {timerDays === 0
              ? `00`
              : timerDays > 31
              ? `00`
              : timerDays < 10
              ? `0${timerDays}`
              : `${timerDays}`}
          </Num>
          <Label>days</Label>
        </NumAndLabel>{' '}
        <NumAndLabel>
          <Num>
            {timerHours === 0
              ? `00`
              : timerHours > 24
              ? `00`
              : timerHours < 10
              ? `0${timerHours}`
              : `${timerHours}`}
          </Num>
          <Label>hours</Label>
        </NumAndLabel>{' '}
        <NumAndLabel>
          <Num>
            {timerMinutes === 0
              ? `00`
              : timerMinutes > 60
              ? `00`
              : timerMinutes < 10
              ? `0${timerMinutes}`
              : `${timerMinutes}`}
          </Num>
          <Label>minutes</Label>
        </NumAndLabel>{' '}
        <NumAndLabel>
          <Num>
            {timerSeconds === 0
              ? `00`
              : timerSeconds < 10
              ? `0${timerSeconds}`
              : `${timerSeconds}`}
          </Num>
          <Label>seconds</Label>
        </NumAndLabel>
      </Container>
    </Wrapper>
  )
}

export default NowCountdown
