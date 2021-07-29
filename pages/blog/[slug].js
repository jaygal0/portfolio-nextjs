import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Metadata from '../../components/Metadata'
import Post from '../../components/Post'
import { Container, GridContainer } from '../../styles'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import styled from 'styled-components'

const Body = styled.div`
  grid-column: 3 / span 8;
  margin-top: 3.2rem;
`

export default function PostPage({
  frontmatter: { title, date, subtitle },
  slug,
  content,
}) {
  return (
    <>
      <Metadata title={title} />
      <Container>
        <Nav />
        <main>
          <Post heading={title} subheading={subtitle} published={date} />
          <GridContainer>
            <Body dangerouslySetInnerHTML={{ __html: marked(content) }}></Body>
          </GridContainer>
        </main>
        <Footer />
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
