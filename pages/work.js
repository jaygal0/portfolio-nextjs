import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

export default function Work() {
  return (
    <>
      <Metadata
        title="Work"
        desc="An online portfolio of Joshua Galinato's work"
      />
      <Nav />
      <main>
        <HeroHeading
          title="work &amp; personal projects"
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
