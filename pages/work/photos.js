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

const TextWrapper = styled.div`
  grid-column: 3 / span 8;
`

export default function Detail({}) {
  const { photos } = data
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={photos.img} />
          <ProjectInfo title={photos.title} text={photos.text} />
          <ProjectApps apps={photos.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <h5>designing illustration assets</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore pariatur, reprehenderit cum ea error beatae illo minus
                consequatur sunt aliquid, quisquam, magnam veniam fugiat labore
                tempora dolore incidunt magni facilis.
              </p>
              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>
              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/tmi-banner.png"
                  width={3031}
                  height={1840}
                  className="border-image"
                  quality={100}
                />
              </div>
            </TextWrapper>
          </GridContainer>
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
