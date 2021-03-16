import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import data from '../data/nav'
import Image from 'next/image'

const Menu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin-left: 3.2rem;
  margin-top: 30vh;
`
const ImageContainer = styled.div`
  margin: 3.2rem 0 0 3.2rem;
  width: 4.8rem;
  height: 4.8rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`
const List = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.black};

  &.active {
    color: ${({ theme }) => theme.color.darkGreen};
    font-size: 2rem;
    font-weight: 700;
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.lightGreen};
    transition: ${({ theme }) => theme.transition.nav};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    margin: 0;
    margin-top: 3.2rem;
    font-weight: 700;
    color: white;
    &.active {
      color: ${({ theme }) => theme.color.yellow};
      font-weight: 700;
    }
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.yellow};
      transition: ${({ theme }) => theme.transition.nav};
    }
  }
`
const Nav = () => {
  const router = useRouter()
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <header>
      <nav>
        <Link href="/">
          <ImageContainer>
            <Image
              src="/logo.svg"
              alt="joshua galinato logo"
              layout="fill"
              quality={100}
              objectFit="cover"
            />
          </ImageContainer>
        </Link>
        <Menu>
          {data.map((item) => {
            const { id, text, link } = item
            return (
              <Link id={id} href={link}>
                <List
                  className={router.pathname == link ? 'active' : ''}
                  onClick={showSidebar}
                >
                  {text}
                </List>
              </Link>
            )
          })}
        </Menu>
      </nav>
    </header>
  )
}

export default Nav
