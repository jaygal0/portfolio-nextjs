import React, { useState } from 'react'
import Metadata from '../../components/Metadata'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PortfolioHero from '../../components/PortfolioHero'
import ProjectInfo from '../../components/ProjectInfo'
import data from '../../data/work'
import ProjectApps from '../../components/ProjectApps'
import styled from 'styled-components'
import Image from 'next/image'
import FsLightbox from 'fslightbox-react'
import FormBox from '../../components/FormBox'

const TextWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

export default function Detail({}) {
  const { reload } = data
  const [deck, setDeck] = useState(false)
  const [videos, setVideos] = useState(false)

  return (
    <>
      <Metadata title="Reload Sessions Ltd" />
      <Nav />
      <main>
        <PortfolioHero src={reload.img} />
        <ProjectInfo title={reload.title} text={reload.text} />
        <ProjectApps apps={reload.appsUsed} />
        <TextWrapper>
          <h5>building a media production company</h5>
          <p>
            The company was dedicated to providing a platform for unsigned
            musicians. I had filmed and edited over 300 videos, as well as
            filmed in exotic spots across the world. Below are just a handful of
            videos that I had worked on.
          </p>
          <FsLightbox
            toggler={videos}
            sources={[
              'https://www.youtube.com/watch?v=bZStXj9B2_U',
              'https://www.youtube.com/watch?v=PaoZHxYxK90',
            ]}
          />
          <div className="image" onClick={() => setVideos(!videos)}>
            <Image
              src="/reload-showreel.gif"
              width={1280}
              height={720}
              className="border-image"
            />
          </div>
          <div className="image" onClick={() => setVideos(!videos)}>
            <Image
              src="/reload-surie.gif"
              width={1280}
              height={720}
              className="border-image"
            />
          </div>
          <h5>designing decks</h5>
          <p>
            Handing out decks to potential clients/sponsors was important for
            the growth of Reload Sessions. Each deck had to uphold a high level
            of quality as well as information in order to gain the readers
            trust. Fortunately, each deck went down well with our clients and I
            was able to work on a few creative projects.
          </p>
          <FsLightbox
            toggler={deck}
            sources={[
              '/_next/image?url=%2Freload-deck-1.jpg&w=3840&q=75',
              '/_next/image?url=%2Freload-deck-2.jpg&w=3840&q=75',
              '/_next/image?url=%2Freload-deck-3.jpg&w=3840&q=75',
              '/_next/image?url=%2Freload-deck-4.jpg&w=3840&q=75',
              '/_next/image?url=%2Freload-deck-5.jpg&w=3840&q=75',
              '/_next/image?url=%2Freload-deck-6.jpg&w=3840&q=75',
            ]}
          />
          <div className="image" onClick={() => setDeck(!deck)}>
            <Image
              src="/reload-deck-1.jpg"
              width={3308}
              height={2339}
              className="border-image"
            />
          </div>
          <div className="image" onClick={() => setDeck(!deck)}>
            <Image
              src="/reload-deck-2.jpg"
              width={3308}
              height={2339}
              className="border-image"
            />
          </div>
          <div className="image" onClick={() => setDeck(!deck)}>
            <Image
              src="/reload-deck-3.jpg"
              width={3308}
              height={2339}
              className="border-image"
            />
          </div>
          <div className="image" onClick={() => setDeck(!deck)}>
            <Image
              src="/reload-deck-4.jpg"
              width={3400}
              height={2200}
              className="border-image"
              onClick={() => setDeck1(!deck1)}
            />
          </div>
          <div className="image" onClick={() => setDeck(!deck)}>
            <Image
              src="/reload-deck-5.jpg"
              width={3400}
              height={2200}
              className="border-image"
            />
          </div>
          <div className="image" onClick={() => setDeck(!deck)}>
            <Image
              src="/reload-deck-6.jpg"
              width={3400}
              height={2200}
              className="border-image"
            />
          </div>
        </TextWrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
