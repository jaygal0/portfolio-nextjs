import Metadata from '../../components/Metadata'
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

export default function Detail({}) {
  const { input } = data
  return (
    <>
      <Metadata title="Input" />
      <Nav />
      <main>
        <PortfolioHero src={input.img} />
        <ProjectInfo title={input.title} text={input.text} />
        <ProjectApps apps={input.appsUsed} />
        <TextWrapper>
          <h5>sketching out the idea</h5>
          <p>
            I always prefer to use notepad and pen to sketch a few wireframes.
            In this space, I can be as creative as I want and I cannot make any
            mistakes. I like to sketch out several various designs to make sure
            that I've exhausted my options.
          </p>
          <Image
            src="/input-sketches.jpg"
            width={5333}
            height={3000}
            className="border-image"
          />
          <h5>designing the wireframes</h5>
          <p>
            Once I'm happy with a few sketches, I translate them onto Figma and
            work on the designs further.
          </p>
          <Image
            src="/input-wireframe.jpg"
            width={5333}
            height={3000}
            className="border-image"
          />
          <h5>building a design system</h5>
          <p>
            Whether it's a brand, app or website, it's important that the
            designs are consistent. That's why I ensure there are strict design
            rules that need to be followed. Building one is an on-going process
            and it constantly changes throughout the design process.
          </p>

          <Image
            src="/input-design-system.jpg"
            width={5333}
            height={3000}
            className="border-image"
          />
          <ButtonSecondaryExternal
            title="view the design system"
            link="https://www.figma.com/proto/dLx8tNnCQIFgc0PYKQ3gUa/input?node-id=803%3A1154&viewport=691%2C-74%2C0.23447269201278687&scaling=scale-down"
          />
          <h5>developing the MVP</h5>
          <p>
            Since I wanted to learn front end development, I thought I'd take it
            upon myself to build the app. It was a great learning experience and
            it helped me understand the entire process of building apps, from
            design to development.
            <br />
            <br />
            My front end development skills have improved since then, I plan on
            coming back to this project and finishing it off, but I have other
            projects that I would like to tackle first.
            <br />
            <br />
            For now, it's a functional app that is helping me with my language
            learning.
          </p>
          <Image
            src="/input-mockup.png"
            width={5333}
            height={3000}
            className="border-image"
          />
          <ButtonSecondaryExternal
            title="visit the site"
            link="https://inputgame.netlify.app/"
          />
        </TextWrapper>
      </main>
      <Footer />
    </>
  )
}
