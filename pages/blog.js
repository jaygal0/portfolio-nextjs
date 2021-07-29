import React from 'react'
import uuid from 'react-uuid'
import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import FormBox from '../components/FormBox'
import BlogList from '../components/BlogList'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'

export default function Blog({ posts }) {
  return (
    <>
      <Metadata
        title="Blog"
        desc="A space for me to get all the thoughts out of my head."
      />
      <Container>
        <Nav />
        <main>
          <HeroHeading
            title="my space to write"
            subtitle="a writing playground"
          />
          {posts.map((item) => {
            return (
              <BlogList
                key={uuid()}
                heading={item.frontmatter.title}
                subheading={item.frontmatter.subtitle}
                published={item.frontmatter.date}
                snippet={item.frontmatter.excerpt}
                slug={item.slug}
              />
            )
          })}
          <FormBox />
        </main>
        <Footer />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
