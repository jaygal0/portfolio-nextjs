import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import HeroHeadingIndex from '../components/HeroHeadingIndex'
import RecentWork from '../components/RecentWork'
import HeadingAndText from '../components/HeadingAndText'
import Footer from '../components/Footer'
import Face from '../components/Face'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
      <Metadata desc="The online portfolio and central hub of Joshua Galinato" />
      <Nav />
      <main>
        <HeroHeadingIndex>
          <Face />
        </HeroHeadingIndex>
        <Logo />
        <RecentWork />
        <HeadingAndText title="creative problem solver">
          <p>
            Designers are problem solvers in their own right. For every project
            I work on, I focus on the issues and attempt to design the solution.
            <br />
            <br />
            If a new problem is beyond my skillset, I'm up for the challenge of
            learning something new!
          </p>
        </HeadingAndText>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
