import React, { useRef, useEffect } from 'react'
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
                The company was dedicated to providing a platform for unsigned
                musicians. I had filmed and edited over 300 videos, as well as
                filmed in exotic spots across the world. Below are just a
                handful of videos that I had worked on.
              </p>
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
              <h5>designing decks</h5>
              <p>
                Handing out decks to potential clients/sponsors was important
                for the growth of Reload Sessions. Each deck had to uphold a
                high level of quality as well as information in order to gain
                the readers trust. Fortunately, each deck went down well with
                our clients and I was able to work on some creative projects.
              </p>
              <div className="image">
                <Image
                  src="/reload-deck-1.jpg"
                  width={3308}
                  height={2339}
                  className="border-image"
                />
              </div>
              <div className="image">
                <Image
                  src="/reload-deck-2.jpg"
                  width={3308}
                  height={2339}
                  className="border-image"
                />
              </div>
              <div className="image">
                <Image
                  src="/reload-deck-3.jpg"
                  width={3308}
                  height={2339}
                  className="border-image"
                />
              </div>{' '}
              <div className="image">
                <Image
                  src="/reload-deck-4.jpg"
                  width={3400}
                  height={2200}
                  className="border-image"
                />
              </div>
              <div className="image">
                <Image
                  src="/reload-deck-5.jpg"
                  width={3400}
                  height={2200}
                  className="border-image"
                />
              </div>
              <div className="image">
                <Image
                  src="/reload-deck-6.jpg"
                  width={3400}
                  height={2200}
                  className="border-image"
                />
              </div>
              <ButtonSecondaryExternal
                title="view the design system"
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
