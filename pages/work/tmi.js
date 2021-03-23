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
              <h5>sketching out the idea</h5>
              <p>
                I always prefer to use notepad and pen to sketch a few
                wireframes. In this space, I can be as creative as I want and I
                cannot make any mistakes. I like to sketch out several various
                designs to make sure that I've exhausted my options.
              </p>
              <Image
                src="/tmi-sketches.jpg"
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
                src="/tmi-wireframes.jpg"
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
                src="/tmi-design-system.jpg"
                width={5333}
                height={3000}
                className="border-image"
              />
              <ButtonSecondaryExternal
                title="view the design system"
                link="https://www.figma.com/proto/tvcmGFjKuqSfHL5yHEb8Iy/Testing-My-Ideas?node-id=640%3A0&viewport=-372%2C489%2C0.11715061217546463&scaling=contain"
              />
              <h5>creating the prototype</h5>
              <p>
                Building a functional prototype allows me to get a better idea
                of what the site will look like, it also allows me to gather
                some feedback when necessary. I like to ensure the prototype is
                as close to the final product as possible.
              </p>
              <Image
                src="/tmi.gif"
                width={960}
                height={540}
                className="border-image"
              />
              <ButtonFlex>
                <ButtonSecondaryExternal
                  title="view the desktop prototype"
                  link="https://www.figma.com/proto/tvcmGFjKuqSfHL5yHEb8Iy/Testing-My-Ideas?node-id=555%3A2827&viewport=526%2C410%2C0.10814894735813141&scaling=scale-down"
                />

                <ButtonSecondaryExternal
                  title="view the mobile prototype"
                  link="https://www.figma.com/proto/tvcmGFjKuqSfHL5yHEb8Iy/Testing-My-Ideas?node-id=555%3A2827&viewport=526%2C410%2C0.10814894735813141&scaling=scale-down"
                />
              </ButtonFlex>

              <h5>developing the MVP</h5>
              <p>
                I thought it would be a good idea to use this project in order
                to learn a few different frameworks as well as a little back-end
                development. I was able to put everything together and create a
                functional website.
              </p>
              <Image
                src="/tmi-mockup.png"
                width={5333}
                height={3000}
                className="border-image"
              />
              <ButtonSecondaryExternal
                title="visit the site"
                link="https://www.testingmyideas.com"
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
