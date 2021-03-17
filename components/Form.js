import React from 'react'
import styled from 'styled-components'
import { GridContainer } from '../styles'

const FormWrapper = styled.section`
  grid-column: 3 / span 8;
`
const TitleWrapper = styled.div`
  /* margin: 0 auto; */
`

const Form = () => {
  return (
    <GridContainer>
      <FormWrapper>
        <TitleWrapper>
          <h4>let's connect</h4>
          <p>fill in the form and let's create some magic</p>
        </TitleWrapper>
        <form>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" />
        </form>
      </FormWrapper>
    </GridContainer>
  )
}

export default Form
