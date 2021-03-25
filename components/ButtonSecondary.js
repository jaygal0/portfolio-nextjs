import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.color.lightGreen};
  color: white;
  text-transform: capitalize;
  font-size: 1.4rem;
  line-height: ${({ theme }) => theme.font.desktop.meta};
  padding: 1.2rem 1.2rem;
  border-radius: 3.2rem;
  border: none;
  outline: none;

  &.margin-top {
    margin-top: 3.2rem;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.darkGreen};
    transition: ${({ theme }) => theme.transition.buttons};
  }
`
const Arrow = styled.span`
  margin-left: 1.6rem;
`

const ButtonSecondary = ({ title, link, marginTop }) => {
  return (
    <Link href={link}>
      <Button className={marginTop === '3.2rem' ? 'margin-top' : ''}>
        {title}
        <Arrow>&gt;</Arrow>
      </Button>
    </Link>
  )
}

export default ButtonSecondary
