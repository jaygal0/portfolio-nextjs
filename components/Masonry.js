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

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 0 -3px ${({ theme }) => theme.color.lightGreen};
    top: -7px;
    left: -7px;
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

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 0 -3px ${({ theme }) => theme.color.lightGreen};
    /* -webkit-transform: scale(1.05); */
    top: -7px;
    left: -7px;
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

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 0 -3px ${({ theme }) => theme.color.lightGreen};
    top: -7px;
    left: -7px;
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
      <SquareTopLeft>
        <Link href={topLeftLink}>
          <Image
            src={topLeftImg}
            alt=""
            quality={100}
            layout="fill"
            objectFit="cover"
            className="border-image"
          />
        </Link>
      </SquareTopLeft>
      <SquareBottomLeft>
        <Link href={btmLeftLink}>
          <Image
            src={btmLeftImg}
            alt=""
            quality={100}
            layout="fill"
            objectFit="cover"
            className="border-image"
          />
        </Link>
      </SquareBottomLeft>
      <RectangleRight>
        <Link href={rightLink}>
          <Image
            src={rightImg}
            alt=""
            quality={100}
            layout="fill"
            objectFit="cover"
            className="border-image"
          />
        </Link>
      </RectangleRight>
    </MasonryWrapper>
  )
}

export default Masonry
