import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import SkillApp from '../components/SkillApp'

export default function Skills() {
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <HeroHeading
            title="my current skill set"
            subtitle="a life-long learner"
          />
          <SkillApp programName="premiere" subtitle="adobe" />
        </main>
        <Footer />
      </Container>
    </>
  )
}
