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
  const { galinato } = data
  return (
    <>
      <Metadata title="Commonplace Book" />
      <Nav />
      <main>
        <PortfolioHero src={galinato.img} />
        <ProjectInfo title={galinato.title} text={galinato.text} />
        <ProjectApps apps={galinato.appsUsed} />
        <TextWrapper>
          <h5>sketching out the idea</h5>
          <p>
            I always prefer to use notepad and pen to sketch a few wireframes.
            In this space, I can be as creative as I want and I cannot make any
            mistakes. I like to sketch out several various designs to make sure
            that I've exhausted my options.
          </p>
          <Image
            src="/commonplace-book-sketches.png"
            width={2000}
            height={1125}
            className="border-image"
          />
          <h5>building a design system</h5>
          <p>
            For me, it&#39;s important to build a design system to enable a high
            level of quality and consistency in design. I break down each
            component at an atomic level and work my way upwards. I find this
            helps me design at a much faster rate as well, since I fall back on
            the components that I&#39;ve designed on in the past.
          </p>
          <Image
            src="/galinato-design-system.png"
            width={2000}
            height={1125}
            className="border-image"
          />

          <ButtonSecondaryExternal
            title="view the full design system"
            link="https://www.figma.com/file/O7hzuNGQXFtpizLh8ouknL/galina.to?node-id=1504%3A1297"
          />
          <h5>wireframing</h5>
          <p>
            After building the components I like to create wireframes to show
            developers, stackholders, as well as myself how an idea could look
            like. This is where I get to experiement and be creative. Since this
            is my own project, the process is exactly the same. From low to high
            fidelity I gradually develop the idea and constantly iterate the
            design until I see fit.
          </p>
          <Image
            src="/galinato-prototype.png"
            width={2000}
            height={1125}
            className="border-image"
          />
          <ButtonSecondaryExternal
            title="view wireframes"
            link="https://www.figma.com/file/O7hzuNGQXFtpizLh8ouknL/galina.to?node-id=1411%3A29"
          />
          <h5>building the website from scratch</h5>
          <p>
            Wanting to learn how to code I used this opportunity to build the
            website using the latest technologies. This has helped me understand
            the development process and has helped me be a better UX designer
            out of it. I'm constantly learning new technologies and trying to
            implement it here in my website to help me be better at my craft.
          </p>
          <ButtonSecondaryExternal
            title="view github source code"
            link="https://github.com/jaygal0/portfolio-nextjs"
          />
        </TextWrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
