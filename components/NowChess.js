import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'

const Wrapper = styled.div`
  width: calc(50% - (3.2rem / 2));
  background: ${({ theme }) => theme.color.grey};
  padding: 2.4rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
const Content = styled.div`
  position: absolute;
  height: calc(100% - 4.8rem);
  width: calc(100% - 4.8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const RatingWrapper = styled.div`
  display: flex;
  gap: 4rem;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Rating = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 4.8rem;
  line-height: 5.6rem;
  margin-bottom: 3.2rem;
`
const Label = styled.p`
  text-align: center;
`
const Heading = styled.h5`
  margin-bottom: 4.8rem;
`
const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  margin-top: 3.2rem;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: ${({ theme }) => theme.color.lightGreen};
    margin-right: 0.8rem;
  }
`

const NowChess = ({ title, blitz, rapid }) => {
  return (
    <Wrapper>
      <Content>
        <Heading>{title}</Heading>
        <RatingWrapper>
          <Container>
            <Rating>{blitz}</Rating>
            <Label>Blitz</Label>
          </Container>
          <Container>
            <Rating>{rapid}</Rating>
            <Label>Rapid</Label>
          </Container>
        </RatingWrapper>
        <Text>
          Live from{' '}
          <a href="https://lichess.org" target="_blank">
            lichess.org
          </a>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default NowChess
