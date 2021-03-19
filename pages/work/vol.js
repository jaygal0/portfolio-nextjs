import Metadata from '../../components/Metadata'
import { Container, GridContainer } from '../../styles'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import PortfolioHero from '../../components/PortfolioHero'
import ProjectInfo from '../../components/ProjectInfo'
import data from '../../data/work'
import ProjectApps from '../../components/ProjectApps'
import styled from 'styled-components'
import Image from 'next/image'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const TextWrapper = styled.div`
  grid-column: 3 / span 8;
`

export default function Detail({}) {
  const { vol } = data
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={vol.img} />
          <ProjectInfo title={vol.title} text={vol.text} />
          <ProjectApps apps={vol.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <SimpleReactLightbox>
                <SRLWrapper>
                  <h5>designing social media assets</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore pariatur, reprehenderit cum ea error beatae illo
                    minus consequatur sunt aliquid, quisquam, magnam veniam
                    fugiat labore tempora dolore incidunt magni facilis.
                  </p>
                  <Image
                    src="/tmi-banner.png"
                    width={3031}
                    height={1840}
                    className="border-image"
                    quality={100}
                  />
                  <h5>designing decks</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore pariatur, reprehenderit cum ea error beatae illo
                    minus consequatur sunt aliquid, quisquam, magnam veniam
                    fugiat labore tempora dolore incidunt magni facilis.
                  </p>
                  <div className="image">
                    <Image
                      src="/vol-deck-1.jpg"
                      width={3508}
                      height={2481}
                      className="border-image"
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/vol-deck-2.jpg"
                      width={3508}
                      height={2481}
                      className="border-image"
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/vol-deck-3.jpg"
                      width={3508}
                      height={2481}
                      className="border-image"
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/vol-deck-4.jpg"
                      width={3508}
                      height={2481}
                      className="border-image"
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/vol-deck-5.jpg"
                      width={3508}
                      height={2481}
                      className="border-image"
                    />
                  </div>
                </SRLWrapper>
              </SimpleReactLightbox>
            </TextWrapper>
          </GridContainer>
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
