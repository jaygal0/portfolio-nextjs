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
import FormBox from '../../components/FormBox'

const ImgWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
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
            <ImgWrapper>
              <div className="image">
                <Image
                  src="/photos-forest.jpg"
                  width={5760}
                  height={3840}
                  className="border-image image"
                />
              </div>
              <div className="image">
                <Image
                  src="/photos-reload.jpg"
                  width={5635}
                  height={3757}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-leo.jpg"
                  width={5452}
                  height={3635}
                  className="border-image"
                  quality={100}
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-snowball.jpg"
                  width={5106}
                  height={3404}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-israel.jpg"
                  width={5706}
                  height={3840}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-coconut.jpg"
                  width={5616}
                  height={3744}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-tori-kelly.jpg"
                  width={5616}
                  height={3744}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-friends.jpg"
                  width={5760}
                  height={3840}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-joshua-tree.jpg"
                  width={5760}
                  height={3840}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-sax.jpg"
                  width={5760}
                  height={3840}
                  className="border-image"
                />
              </div>

              <div className="image">
                <Image
                  src="/photos-ebony.jpg"
                  width={5760}
                  height={3840}
                  className="border-image"
                />
              </div>
            </ImgWrapper>
          </GridContainer>
          <FormBox />
        </main>
        <Footer />
      </Container>
    </>
  )
}
