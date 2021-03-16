import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import RecentWork from '../components/RecentWork'
import HeadingAndText from '../components/HeadingAndText'

export default function Home() {
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <HeroHeading
            title="i design, code &amp; solve problems"
            subtitle="hi, i'm josh"
          />
          <RecentWork />
          <HeadingAndText title="creative problem solver">
            <p>
              Designers are problem solvers in their own right. For every
              project I work on, I focus on the issues and attempt to design the
              solution.
              <br />
              <br />
              If a new problem is beyond my skillset, I'm up for the challenge
              of learning something new!
            </p>
          </HeadingAndText>
        </main>
      </Container>
    </>
  )
}
