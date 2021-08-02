import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import data from '../data/nav'
import Image from 'next/image'
import uuid from 'react-uuid'

const Menu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin-left: 3.2rem;
  margin-top: 30vh;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    position: absolute;
    flex-direction: row;
    top: 4rem;
    right: 1.6rem;
    margin-left: 0;
    margin-top: 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    position: absolute;
    flex-direction: column;
    top: 4rem;
    right: 1.6rem;
    margin-left: 0;
    margin-top: 0;
    background: ${({ theme }) => theme.color.lightGreen};
    border-radius: 1.6rem;
    padding: 0.8rem 3.2rem;
    opacity: 0.95;

    &.hideMenu {
      opacity: 0;
      transition: 0.3s all ease-in;
      transform: translateY(-100%);
      z-index: 2;
    }
    &.showMenu {
      opacity: 1;
      transition: 0.3s all ease-in;
      transform: translateY(0);
      z-index: 2;
    }
  }
`
const ImageContainer = styled.div`
  margin: 3.2rem 0 0 3.2rem;
  width: 4.8rem;
  height: 4.8rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    margin: 3.2rem 0 0 0;
  }
`
const List = styled.li`
  text-transform: capitalize;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.black};
  list-style: none;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin: 1.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    color: white;
  }

  &.active {
    color: ${({ theme }) => theme.color.darkGreen};
    font-size: 1.8rem;
    font-weight: 700;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
      font-size: 1.6rem;
    }
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.lightGreen};
    transition: 0.1s all linear;
    font-size: 1.8rem;
  }
`
const BurgerIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: block;
    position: absolute;
    flex-direction: column;
    top: 4.2rem;
    right: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: block;
    position: absolute;
    right: 1.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneSmall}) {
    right: 0.8rem;
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
        <BurgerIconWrapper>
          <Image
            src="/burger.svg"
            alt="burger icon"
            width={38}
            height={24}
            onClick={showSidebar}
          />
        </BurgerIconWrapper>
        <Menu
          className={sidebar ? 'hideMenu' : 'showMenu'}
          onClick={showSidebar}
        >
          {data.map((item) => {
            const { text, link } = item
            return (
              <div key={uuid()}>
                <Link href={link}>
                  <List
                    className={router.pathname == link ? 'active' : ''}
                    onClick={showSidebar}
                  >
                    {text}
                  </List>
                </Link>
              </div>
            )
          })}
        </Menu>
      </nav>
    </header>
  )
}

export default Nav
