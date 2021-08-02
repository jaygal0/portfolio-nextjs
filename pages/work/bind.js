import Metadata from '../../components/Metadata'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import FormBox from '../../components/FormBox'
import PortfolioHero from '../../components/PortfolioHero'
import ProjectInfo from '../../components/ProjectInfo'
import data from '../../data/work'
import ProjectApps from '../../components/ProjectApps'
import styled from 'styled-components'
import Image from 'next/image'
import ButtonSecondaryExternal from '../../components/ButtonSecondaryExternal'

const TextWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

export default function Detail({}) {
  const { bind } = data
  return (
    <>
      <Metadata title="Bind" />
      <Nav />
      <main>
        <PortfolioHero src={bind.img.banner} />
        <ProjectInfo title={bind.title} text={bind.text} />
        <ProjectApps apps={bind.appsUsed} />
        <TextWrapper>
          <h5>sketching out the idea</h5>
          <p>
            I always prefer to use notepad and pen to sketch a few wireframes.
            In this space, I can be as creative as I want and I cannot make any
            mistakes. I like to sketch out several various designs to make sure
            that I've exhausted my options.
          </p>
          <Image
            src={bind.img.sketch}
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
            src={bind.img.wireframe}
            width={5333}
            height={3000}
            className="border-image"
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
            For now, it's a functional app that does the job.
          </p>
          <Image
            src={bind.img.mockup}
            width={5333}
            height={3000}
            className="border-image"
          />
          <ButtonSecondaryExternal title="view the app" link={bind.link} />
        </TextWrapper>
      </main>
      <Footer />
    </>
  )
}
