import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const RectangleStyling = styled.div`
  width: 100%;
  padding-top: 50%;
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
const PortfolioRectangle = ({ href, src }) => {
  return (
    <Link href={href}>
      <RectangleStyling>
        <Image
          className="border-image"
          src={src}
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </RectangleStyling>
    </Link>
  )
}

export default PortfolioRectangle
