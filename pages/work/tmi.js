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
  const { tmi } = data
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={tmi.img} />
          <ProjectInfo title={tmi.title} text={tmi.text} />
          <ProjectApps apps={tmi.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <h5>the initial idea</h5>
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
            </TextWrapper>
          </GridContainer>
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
