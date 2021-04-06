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
import ButtonSecondaryExternal from '../../components/ButtonSecondaryExternal'
import FormBox from '../../components/FormBox'

const TextWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
const ButtonFlex = styled.div`
  display: flex;
  gap: 1.6rem;
`

export default function Detail({}) {
  const { five } = data
  return (
    <>
      <Metadata title="5" />
      <Container>
        <Nav />
        <main>
          <PortfolioHero src={five.img} />
          <ProjectInfo title={five.title} text={five.text} />
          <ProjectApps apps={five.appsUsed} />
          <GridContainer>
            <TextWrapper>
              <h5>sketching out the idea</h5>
              <p>
                I always prefer to use notepad and pen to sketch a few
                wireframes. In this space, I can be as creative as I want and I
                cannot make any mistakes. I like to sketch out several various
                designs to make sure that I've exhausted my options.
              </p>
              <Image
                src="/5-sketches.jpg"
                width={5333}
                height={3000}
                className="border-image"
              />
              <h5>designing the wireframes</h5>
              <p>
                Once I'm happy with a few sketches, I translate them onto Figma
                and work on the designs further.
              </p>
              <Image
                src="/5-wireframes.jpg"
                width={5333}
                height={3000}
                className="border-image"
              />
              <h5>building a design system</h5>
              <p>
                Whether it's a brand, app or website, it's important that the
                designs are consistent. That's why I ensure there are strict
                design rules that need to be followed. Building one is an
                on-going process and it constantly changes throughout the design
                process.
              </p>

              <Image
                src="/5-design-system.jpg"
                width={5333}
                height={3000}
                className="border-image"
              />
              <h5>creating the prototype</h5>
              <p>
                Building a functional prototype allows me to get a better idea
                of what the site will look like, it also allows me to gather
                some feedback when necessary. I like to ensure the prototype is
                as close to the final product as possible.
              </p>
              <Image
                src="/5-prototype-wide.gif"
                width={960}
                height={540}
                className="border-image"
              />
              <ButtonSecondaryExternal
                title="view the prototype"
                link="https://www.figma.com/proto/vUBbGPfHJ27yaJM0YZZUQr/5?node-id=761%3A600&viewport=725%2C525%2C0.1613333374261856&scaling=scale-down&page-id=759%3A10378"
              />

              <h5>developing the MVP</h5>
              <p>
                I'm still in the process of developing the app myself. I thought
                it would be a great opportunity for me to learn and understand
                the React Native framework, which is what I plan to use to build
                the app.
              </p>
              <Image
                src="/5-mockup.png"
                width={5333}
                height={3000}
                className="border-image"
              />
            </TextWrapper>
          </GridContainer>
          <FormBox />
        </main>
        <Footer />
      </Container>
    </>
  )
}
