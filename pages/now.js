import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Now from '../components/Now'
import Footer from '../components/Footer'

export default function NowPage({ data }) {
  return (
    <>
      <Metadata title="Now" desc="What Joshua Galinato is doing now" />
      <Container>
        <Nav />
        <main>
          <HeroHeading title="what i'm doing now" subtitle="joshua galinato" />
          <Now
            rapidRating={data.perfs.rapid.rating}
            blitzRating={data.perfs.blitz.rating}
          />
        </main>
        <Footer />
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://lichess.org/api/account`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
    revalidate: 86400,
  }
}
