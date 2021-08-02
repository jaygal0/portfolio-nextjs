import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.color.lightGreen};
  color: white;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.desktop.meta};
  line-height: ${({ theme }) => theme.font.desktop.meta};
  padding: 1.2rem 1.2rem;
  border-radius: 3.2rem;
  border: none;
  outline: none;
  margin: 1.6rem 0;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.darkGreen};
    transition: ${({ theme }) => theme.transition.buttons};
  }
`
const Arrow = styled.span`
  margin-left: 1.6rem;
`
const ButtonSecondaryExternal = ({ title, link, marginTop }) => {
  return (
    <a href={link} target="_blank">
      <Button>
        {title}
        <Arrow>&gt;</Arrow>
      </Button>
    </a>
  )
}

export default ButtonSecondaryExternal
