import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Now from '../components/Now'
import Footer from '../components/Footer'

export default function NowPage() {
  return (
    <>
      <Metadata title="Now" desc="What Joshua Galinato is doing now" />
      <Container>
        <Nav />
        <main>
          <HeroHeading title="what i'm doing now" subtitle="joshua galinato" />
          <Now />
        </main>
        <Footer />
      </Container>
    </>
  )
}
