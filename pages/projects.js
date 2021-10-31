import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

export default function Work() {
  return (
    <>
      <Metadata
        title="Projects"
        desc="An online portfolio of Joshua Galinato's projects"
      />
      <Nav />
      <main>
        <HeroHeading
          title="my creative hub"
          subtitle="an ever-growing portfolio"
        />
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
