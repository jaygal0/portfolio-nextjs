import React, { useState } from 'react'
import Metadata from '../../components/Metadata'
import { Container, GridContainer } from '../../styles'
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
const GifWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30rem;
`
const ImgWrapper = styled.div`
  width: 30%;
  position: relative;
  overflow: visible;
`

export default function Detail({}) {
  const [asset, setAsset] = useState(false)
  const [deck, setDeck] = useState(false)
  const { vol } = data
  return (
    <>
      <Metadata title="Vegans of LDN" />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={vol.img} />
          <ProjectInfo title={vol.title} text={vol.text} />
          <ProjectApps apps={vol.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <h5>designing social media assets</h5>
              <p>
                By creating interactive, creative and entertaining posts (such
                as the example below), we were able to leverage Instagram and
                build a large following that spanned over 100,000 followers. We
                were constantly coming up with new ideas for posts and since I
                was the only designer on the team, it was up to me to create
                each one of them.
              </p>
              <div className="image" onClick={() => setAsset(!asset)}>
                <Image
                  src="/vol-phone-assets-1.jpg"
                  width={5333}
                  height={3000}
                  className="border-image"
                />
              </div>
              <FsLightbox
                toggler={asset}
                sources={[
                  '/_next/image?url=%2Fvol-phone-assets-1.jpg&w=3840&q=75',
                ]}
              />
              <GifWrapper>
                <ImgWrapper>
                  <Image
                    src="/vol-gif-1.gif"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImgWrapper>
                <ImgWrapper>
                  <Image
                    src="/vol-gif-3.gif"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImgWrapper>
                <ImgWrapper>
                  <Image
                    src="/vol-gif-2.gif"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImgWrapper>
              </GifWrapper>
              <h5>designing decks</h5>
              <p>
                Handing out decks to potential clients/sponsors was important
                for the growth of VoL. Each deck had to uphold a high level of
                quality as well as creativity in order to gain the readers
                trust. Fortunately, each deck went down well with our clients
                and brought in a lot of revenue to the company. Below is just
                one example of the successful decks that I had to design.
              </p>
              <FsLightbox
                toggler={deck}
                sources={[
                  'http://localhost:3000/_next/image?url=%2Fvol-deck-1.jpg&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fvol-deck-2.jpg&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fvol-deck-3.jpg&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fvol-deck-4.jpg&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fvol-deck-5.jpg&w=3840&q=75',
                ]}
              />
              <div className="image" onClick={() => setDeck(!deck)}>
                <Image
                  src="/vol-deck-1.jpg"
                  width={3508}
                  height={2481}
                  className="border-image"
                />
              </div>
              <div className="image" onClick={() => setDeck(!deck)}>
                <Image
                  src="/vol-deck-2.jpg"
                  width={3508}
                  height={2481}
                  className="border-image"
                />
              </div>
              <div className="image" onClick={() => setDeck(!deck)}>
                <Image
                  src="/vol-deck-3.jpg"
                  width={3508}
                  height={2481}
                  className="border-image"
                />
              </div>
              <div className="image" onClick={() => setDeck(!deck)}>
                <Image
                  src="/vol-deck-4.jpg"
                  width={3508}
                  height={2481}
                  className="border-image"
                />
              </div>
              <div className="image" onClick={() => setDeck(!deck)}>
                <Image
                  src="/vol-deck-5.jpg"
                  width={3508}
                  height={2481}
                  className="border-image"
                />
              </div>
            </TextWrapper>
          </GridContainer>
          <FormBox />
        </main>
        <Footer />
      </Container>
    </>
  )
}
