import React from 'react'
import uuid from 'react-uuid'
import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import Form from '../components/Form'
import BlogList from '../components/BlogList'
import data from '../data/blog'

export default function Blog() {
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <HeroHeading
            title="writing what's in my head"
            subtitle="capturing my thoughts"
          />
          {data.map((item) => {
            const { heading, subheading, published, snippet } = item
            return (
              <BlogList
                key={uuid()}
                heading={heading}
                subheading={subheading}
                published={published}
                snippet={snippet}
              />
            )
          })}
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
