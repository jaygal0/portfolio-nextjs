import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function Now() {
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <HeroHeading title="what am i up to right now?" subtitle="/now" />
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
