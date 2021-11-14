import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'

const Wrapper = styled.a`
  width: calc(50% - (3.2rem / 2));
  background: ${({ theme }) => theme.color.grey};
  padding: 2.4rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  position: relative;
  transform: 0.5s ease-in all;
  top: 0;
  left: 0;
  transition: 0.2s ease-in all;
  text-decoration: none;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &.hover {
    &:hover {
      cursor: pointer;
      box-shadow: 15px 15px 0 -3px ${({ theme }) => theme.color.lightGreen};
      top: -7px;
      left: -7px;
    }
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
const Heading = styled.h5`
  margin-bottom: 4.8rem;
  color: black;
`
const Text = styled.p`
  margin-top: 3.2rem;
  text-align: center;
  color: black;
`
const Img = styled.div`
  position: relative;
  width: 155px;
  height: 116px;
`
const ImgAlt = styled.div`
  position: relative;
  width: 70%;
  height: 116px;
`
const ImgReading = styled.div`
  position: relative;
  width: 116px;
  height: 100%;
`

const NowSquare = ({ title, img, imgAlt, imgReading, text, link }) => {
  return (
    <Wrapper
      className={link ? 'hover' : ''}
      href={link ? link : null}
      target="_blank"
    >
      <Content>
        <Heading>{title}</Heading>
        {img ? (
          <Img>
            <Image src={`/${img}`} layout="fill" />
          </Img>
        ) : imgReading ? (
          <ImgReading>
            <Image src={`${imgReading}`} layout="fill" />
          </ImgReading>
        ) : (
          <ImgAlt>
            <Image src={`/${imgAlt}`} layout="fill" />
          </ImgAlt>
        )}
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  )
}

export default NowSquare
