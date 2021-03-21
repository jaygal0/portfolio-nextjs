import React from 'react'
import styled from 'styled-components'
import ButtonSecondary from '../components/ButtonSecondary'
import { GridContainer } from '../styles'
import Image from 'next/image'
import uuid from 'react-uuid'

const AppWrapper = styled.div`
  grid-column: 3 / span 8;
  background: ${({ theme }) => theme.color.green};
  color: white;
  padding: 3.2rem;
  border-radius: 3.2rem;
  margin-bottom: 1.6rem;
  /* display: flex; */
  /* flex-direction: column; */
`
const Title = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 1.6rem;
`
const Text = styled.p``
const FlexAppWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  /* justify-content: space-between; */
  /* align-content: space-between; */
  flex-wrap: wrap;
  margin-top: 3.2rem;
`
const App = styled.div`
  position: relative;
  width: 9%;
  padding: 9%;
  margin-bottom: 1.6rem;
`

const ProjectApps = ({ apps }) => {
  return (
    <GridContainer>
      <AppWrapper>
        <Title>a list of apps</Title>
        <Text>
          Below is a list of apps I used in order to complete the project. To
          view my entire skill set along with my experience for each app, click
          on the button below.
        </Text>
        <ButtonSecondary title="view my skills" link="/skills" />
        <FlexAppWrapper>
          {apps.map((item) => {
            return (
              <App key={uuid()}>
                <Image
                  src={`/${item}.svg`}
                  alt={`logo of ${item}`}
                  layout="fill"
                  quality={75}
                />
              </App>
            )
          })}
        </FlexAppWrapper>
      </AppWrapper>
    </GridContainer>
  )
}

export default ProjectApps
