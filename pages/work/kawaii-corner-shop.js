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
const SquareFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-top: 4rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    gap: 1.2rem;
  }
`
const Square = styled.div`
  width: 49%;
`
const MarginTop = styled.div`
  margin-top: 2.4rem;
`

export default function Detail({}) {
  const { kawaii } = data
  const [asset, setAsset] = useState(false)

  return (
    <>
      <Metadata title="Kawaii Corner Shop" />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={kawaii.img} />
          <ProjectInfo title={kawaii.title} text={kawaii.text} />
          <ProjectApps apps={kawaii.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <FsLightbox
                toggler={asset}
                sources={[
                  'http://localhost:3000/_next/image?url=%2Fkawaii-instagram.jpg&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fkawaii-asset-1.png&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fkawaii-asset-2.png&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fkawaii-asset-3.png&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fkawaii-asset-4.png&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fkawaii-asset-5.png&w=3840&q=75',
                  'http://localhost:3000/_next/image?url=%2Fkawaii-asset-6.png&w=3840&q=75',
                ]}
              />
              <MarginTop className="image" onClick={() => setAsset(!asset)}>
                <Image
                  src="/kawaii-instagram.jpg"
                  width={5333}
                  height={3000}
                  className="border-image"
                />
              </MarginTop>
              <SquareFlexWrapper>
                <Square className="image" onClick={() => setAsset(!asset)}>
                  <Image
                    src="/kawaii-asset-1.png"
                    width={4501}
                    height={4500}
                    className="border-image"
                  />
                </Square>
                <Square className="image" onClick={() => setAsset(!asset)}>
                  <Image
                    src="/kawaii-asset-2.png"
                    width={4501}
                    height={4500}
                    className="border-image"
                  />
                </Square>
                <Square className="image" onClick={() => setAsset(!asset)}>
                  <Image
                    src="/kawaii-asset-3.png"
                    width={4501}
                    height={4500}
                    className="border-image"
                  />
                </Square>
                <Square className="image" onClick={() => setAsset(!asset)}>
                  <Image
                    src="/kawaii-asset-4.png"
                    width={4501}
                    height={4500}
                    className="border-image"
                  />
                </Square>
                <Square className="image" onClick={() => setAsset(!asset)}>
                  <Image
                    src="/kawaii-asset-5.png"
                    width={4501}
                    height={4500}
                    className="border-image"
                  />
                </Square>
                <Square className="image" onClick={() => setAsset(!asset)}>
                  <Image
                    src="/kawaii-asset-6.png"
                    width={4501}
                    height={4500}
                    className="border-image"
                  />
                </Square>
              </SquareFlexWrapper>
            </TextWrapper>
          </GridContainer>
          <FormBox />
        </main>
        <Footer />
      </Container>
    </>
  )
}
