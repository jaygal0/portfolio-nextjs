import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const RectangleStyling = styled.div`
  width: 100%;
  padding-top: 50%;
  background: red;
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
const PortfolioRectangle = ({ href, src }) => {
  return (
    <Link href={href}>
      <RectangleStyling>
        <Image src={src} layout="fill" objectFit="cover" quality={100} />
      </RectangleStyling>
    </Link>
  )
}

export default PortfolioRectangle
