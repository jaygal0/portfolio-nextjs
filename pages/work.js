import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import Form from '../components/Form'
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
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
