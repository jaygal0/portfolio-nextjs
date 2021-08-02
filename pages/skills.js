import React from 'react'
import uuid from 'react-uuid'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import HeroHeading from '../components/HeroHeading'
import Footer from '../components/Footer'
import SkillApp from '../components/SkillApp'
import data from '../data/skills'
import FormBox from '../components/FormBox'

export default function Skills() {
  return (
    <>
      <Metadata
        title="Skills"
        desc="An on-going list of the skills Joshua Galinato has learned throughout the years."
      />
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
              src={`/${programName}.svg`}
              level={level}
            />
          )
        })}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
