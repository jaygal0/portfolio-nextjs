import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Metadata from '../../components/Metadata'
import Post from '../../components/Post'
import { Wrapper } from '../../styles'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import styled from 'styled-components'
import BirthdayPosts from '../../components/BirthdayPosts'

const Body = styled.div`
  margin-top: -3.2rem;
`

export default function PostPage({
  frontmatter: { title, date, subtitle, tags },
  slug,
  content,
}) {
  return (
    <>
      <Metadata title={title} />
      <Nav />
      <main>
        <Post heading={title} subheading={subtitle} published={date} />
        <Wrapper>
          <Body dangerouslySetInnerHTML={{ __html: marked(content) }}></Body>
          {tags.includes('birthday') && <BirthdayPosts />}
        </Wrapper>
      </main>
      <footer>
        <Footer />
      </footer>
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
