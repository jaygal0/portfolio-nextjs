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
import ButtonSecondaryExternal from '../../components/ButtonSecondaryExternal'

const TextWrapper = styled.div`
  grid-column: 3 / span 8;
`

export default function Detail({}) {
  const { reload } = data
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={reload.img} />
          <ProjectInfo title={reload.title} text={reload.text} />
          <ProjectApps apps={reload.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <h5>building a media production company</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore pariatur, reprehenderit cum ea error beatae illo minus
                consequatur sunt aliquid, quisquam, magnam veniam fugiat labore
                tempora dolore incidunt magni facilis.
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
                Inventore pariatur, reprehenderit cum ea error beatae illo minus
                consequatur sunt aliquid, quisquam, magnam veniam fugiat labore
                tempora dolore incidunt magni facilis.
              </p>

              <Image
                src="/tmi-banner.png"
                width={3031}
                height={1840}
                className="border-image"
                quality={100}
              />
              <ButtonSecondaryExternal
                title="view the design system"
                link="https://www.figma.com/proto/tvcmGFjKuqSfHL5yHEb8Iy/Testing-My-Ideas?node-id=640%3A0&viewport=315%2C656%2C0.4032875597476959&scaling=contain"
              />
              <h5>designing products</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore pariatur, reprehenderit cum ea error beatae illo minus
                consequatur sunt aliquid, quisquam, magnam veniam fugiat labore
                tempora dolore incidunt magni facilis.
              </p>
              <Image
                src="/tmi-banner.png"
                width={3031}
                height={1840}
                className="border-image"
                quality={100}
              />
              <ButtonSecondaryExternal
                title="view the prototype"
                link="https://www.figma.com/proto/tvcmGFjKuqSfHL5yHEb8Iy/Testing-My-Ideas?node-id=640%3A0&viewport=315%2C656%2C0.4032875597476959&scaling=contain"
              />
              <h5>developing the MVP</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore pariatur, reprehenderit cum ea error beatae illo minus
                consequatur sunt aliquid, quisquam, magnam veniam fugiat labore
                tempora dolore incidunt magni facilis.
              </p>
              <Image
                src="/tmi-banner.png"
                width={3031}
                height={1840}
                className="border-image"
                quality={100}
              />
              <ButtonSecondaryExternal
                title="visit the site"
                link="https://www.figma.com/proto/tvcmGFjKuqSfHL5yHEb8Iy/Testing-My-Ideas?node-id=640%3A0&viewport=315%2C656%2C0.4032875597476959&scaling=contain"
              />
            </TextWrapper>
          </GridContainer>
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
