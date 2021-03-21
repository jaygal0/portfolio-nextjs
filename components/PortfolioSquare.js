import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const SquareStyling = styled.div`
  width: calc(52% - 3.3rem);
  padding-top: 50%;
  border-radius: 3.2rem;
  position: relative;
  top: 0;
  left: 0;
  transition: 0.2s ease-in all;
  background: ${({ theme }) => theme.color.grey};

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 0 -3px ${({ theme }) => theme.color.lightGreen};
    top: -7px;
    left: -7px;
  }
`
const PortfolioSquare = ({ href, src }) => {
  return (
    <Link href={href}>
      <SquareStyling>
        <Image
          className="border-image"
          src={src}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </SquareStyling>
    </Link>
  )
}

export default PortfolioSquare
