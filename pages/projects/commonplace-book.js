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
const ButtonFlex = styled.div`
  display: flex;
  gap: 1.6rem;
`

export default function Detail({}) {
  const { commonplaceBook } = data
  return (
    <>
      <Metadata title="Commonplace Book" />
      <Nav />
      <main>
        <PortfolioHero src={commonplaceBook.img} />
        <ProjectInfo
          title={commonplaceBook.title}
          text={commonplaceBook.text}
        />
        <ProjectApps apps={commonplaceBook.appsUsed} />
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
          <h5>using figma</h5>
          <p>
            Using both low and high fidelity wireframes, I further develop the
            idea.
          </p>
          <Image
            src="/commonplace-book-figma.png"
            width={2000}
            height={1125}
            className="border-image"
          />

          <ButtonSecondaryExternal
            title="view the figma file"
            link="https://www.figma.com/file/Y4CJlNg4H0oH5h31bFfjFW/Commonplace-book?node-id=1174%3A1762"
          />
          <h5>building the prototype</h5>
          <p>
            I like to test my designs to ensure that I get user feedback. Since
            the intended user was solely me, I created a prototype to help me
            navigate around my designs.
          </p>
          <Image
            src="/commonplace-book-prototype.png"
            width={2000}
            height={1125}
            className="border-image"
          />
          <ButtonSecondaryExternal
            title="view the prototype"
            link="https://www.figma.com/proto/Y4CJlNg4H0oH5h31bFfjFW/Commonplace-book?page-id=1174%3A1762&node-id=1174%3A1763&viewport=282%2C48%2C0.26&scaling=scale-down&starting-point-node-id=1174%3A1763"
          />
          <h5>developing the app</h5>
          <p>
            I had intended to design and develop the idea to make it a
            functional app. To help develop my backend skills, I wanted to store
            all the data on a separate database and have the information pulled
            in through an API. Of course, there are a few bugs that I need to
            iron out as well as sort out the responsive design. Since I couldn't
            spend too much time on this project, I'm quite pleased with what I
            was able to create in such a short amount of time. It's an app that
            serves my needs and I'm happy with the results.
          </p>
          <video
            src="/commonplace-book-video.mov"
            width={719}
            height={407}
            className="border-image"
            type="video/mov"
            autoPlay
            muted
            loop
          />
          <ButtonFlex>
            <ButtonSecondaryExternal
              title="view the app"
              link="https://commonplacebook.vercel.app/"
            />
            <ButtonSecondaryExternal
              title="view github"
              link="https://github.com/jaygal0/commonplacebook"
            />
          </ButtonFlex>
        </TextWrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
