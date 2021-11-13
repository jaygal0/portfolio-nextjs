import React from 'react'
import moment from 'moment'
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
`
const NumAndLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;

  &.fade {
    opacity: 0.1;
  }
`
const Num = styled.div`
  font-size: 6.4rem;
  line-height: 7.2rem;
`
const Label = styled.div`
  margin-top: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  text-transform: uppercase;
`

const NowAge = () => {
  // To figure out my age
  let a = moment(new Date())
  let b = moment([1989, 6, 30])

  let years = a.diff(b, 'year')
  b.add(years, 'years')

  let months = a.diff(b, 'months')
  b.add(months, 'months')

  let days = a.diff(b, 'days')

  return (
    <Wrapper>
      <h5>age</h5>
      <Container>
        <NumAndLabel>
          <Num>
            {years === 0 ? `00` : years < 10 ? `0${years}` : `${years}`}
          </Num>
          <Label>years</Label>
        </NumAndLabel>
        <NumAndLabel>
          <Num>
            {months === 0 ? `00` : months < 10 ? `0${months}` : `${months}`}
          </Num>
          <Label>months</Label>
        </NumAndLabel>{' '}
        <NumAndLabel>
          <Num>{days === 0 ? `00` : days < 10 ? `0${days}` : `${days}`}</Num>
          <Label>days</Label>
        </NumAndLabel>{' '}
        <NumAndLabel className="fade">
          <Num>00</Num>
          <Label>hours</Label>
        </NumAndLabel>{' '}
        <NumAndLabel className="fade">
          <Num>00</Num>
          <Label>minutes</Label>
        </NumAndLabel>{' '}
        <NumAndLabel className="fade">
          <Num>00</Num>
          <Label>seconds</Label>
        </NumAndLabel>
      </Container>
    </Wrapper>
  )
}

export default NowAge
