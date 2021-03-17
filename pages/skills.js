import React from 'react'
import uuid from 'react-uuid'
import Metadata from '../components/Metadata'
import { Container } from '../styles'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import SkillApp from '../components/SkillApp'
import Form from '../components/Form'
import data from '../data/skills'

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
          {data.map((item) => {
            const { programName, subtitle, src, level } = item
            return (
              <SkillApp
                key={uuid()}
                programName={programName}
                subtitle={subtitle}
                src={src}
                level={level}
              />
            )
          })}
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
