import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const PostWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.font.desktop.p};
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
`
const Posts = styled.p`
  text-decoration: underline;
  margin-left: 1.6rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.darkGreen};
  transition: ${({ theme }) => theme.transition.link};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.lightGreen};
  }
`

const BirthdayPosts = () => {
  return (
    <PostWrapper>
      <i>All birthday posts:</i>
      <Link href="/blog/32">
        <Posts>32</Posts>
      </Link>
      <Link href="/blog/33">
        <Posts>33</Posts>
      </Link>
      {/* <Link href='/blog/34'><Posts>34</Posts></Link> */}
      {/* <Link href='/blog/35'><Posts>35</Posts></Link> */}
      {/* <Link href='/blog/36'><Posts>36</Posts></Link> */}
      {/* <Link href='/blog/37'><Posts>37</Posts></Link> */}
      {/* <Link href='/blog/38'><Posts>38</Posts></Link> */}
      {/* <Link href='/blog/39'><Posts>39</Posts></Link> */}
      {/* <Link href='/blog/40'><Posts>40</Posts></Link> */}
    </PostWrapper>
  )
}

export default BirthdayPosts
