import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import FormBox from '../components/FormBox'
import Portfolio from '../components/Portfolio'

export default function Work() {
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <HeroHeading
            title="work &amp; personal projects"
            subtitle="an ever-growing portfolio"
          />
          <Portfolio />
          <FormBox />
        </main>
        <Footer />
      </Container>
    </>
  )
}
