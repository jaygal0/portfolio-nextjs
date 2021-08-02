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
      <Link href="/blog/210730-32">
        <Posts>32</Posts>
      </Link>
      {/* <Link href='/blog/220730-32'><p>33</p></Link> */}
      {/* <Link href='/blog/230730-32'><p>34</p></Link> */}
      {/* <Link href='/blog/240730-32'><p>35</p></Link> */}
      {/* <Link href='/blog/250730-32'><p>36</p></Link> */}
      {/* <Link href='/blog/260730-32'><p>37</p></Link> */}
      {/* <Link href='/blog/270730-32'><p>38</p></Link> */}
      {/* <Link href='/blog/280730-32'><p>39</p></Link> */}
      {/* <Link href='/blog/290730-32'><p>40</p></Link> */}
    </PostWrapper>
  )
}

export default BirthdayPosts
