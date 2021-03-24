import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const MasonryWrapper = styled.div`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 3.2rem;
  height: 82.2rem;
  width: 82.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    height: 65rem;
    width: 65rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
    height: 73rem;
    width: 73rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: min-content;
  }
`
const SquareTopLeft = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  background: grey;
  border-radius: 3.2rem;
  position: relative;
  transform: 0.5s ease-in all;
  top: 0;
  left: 0;
  transition: 0.2s ease-in all;
  background: ${({ theme }) => theme.color.grey};

  &:hover {
    cursor: pointer;
    box-shadow: 15px 15px 0 -3px ${({ theme }) => theme.color.lightGreen};
    top: -7px;
    left: -7px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: 100%;
    padding-top: 100%;
  }
`
const SquareBottomLeft = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  background: grey;
  border-radius: 3.2rem;
  position: relative;
  transform: 0.5s ease-in all;
  top: 0;
  left: 0;
  transition: 0.2s ease-in all;
  background: ${({ theme }) => theme.color.grey};

  &:hover {
    cursor: pointer;
    box-shadow: 15px 15px 0 -3px ${({ theme }) => theme.color.lightGreen};
    top: -7px;
    left: -7px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: 100%;
    padding-top: 100%;
  }
`
const RectangleRight = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  border-radius: 3.2rem;
  position: relative;
  top: 0;
  left: 0;
  transition: 0.2s ease-in all;
  background: ${({ theme }) => theme.color.grey};

  &:hover {
    cursor: pointer;
    box-shadow: 15px 15px 0 -3px ${({ theme }) => theme.color.lightGreen};
    top: -7px;
    left: -7px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: 100%;
    padding-top: 100%;
  }
`

const Masonry = ({
  topLeftImg,
  btmLeftImg,
  rightImg,
  topLeftLink,
  btmLeftLink,
  rightLink,
}) => {
  return (
    <MasonryWrapper>
      <Link href={topLeftLink}>
        <SquareTopLeft>
          <Image
            src={topLeftImg}
            alt=""
            quality={100}
            layout="fill"
            objectFit="cover"
            className="border-image"
          />
        </SquareTopLeft>
      </Link>
      <Link href={btmLeftLink}>
        <SquareBottomLeft>
          <Image
            src={btmLeftImg}
            alt=""
            quality={100}
            layout="fill"
            objectFit="cover"
            className="border-image"
          />
        </SquareBottomLeft>
      </Link>
      <Link href={rightLink}>
        <RectangleRight>
          <Image
            src={rightImg}
            alt=""
            quality={100}
            layout="fill"
            objectFit="cover"
            className="border-image"
          />
        </RectangleRight>
      </Link>
    </MasonryWrapper>
  )
}

export default Masonry
