import React from 'react'
import styled from 'styled-components'
import { GridContainer } from '../styles'

const FormWrapper = styled.section`
  grid-column: 3 / span 8;
  width: 100%;
  background: ${({ theme }) => theme.color.green};
  display: flex;
  border-radius: 3.2rem;
  flex-direction: column;
  align-items: center;
  padding: 4.8rem 0;
`
const TitleWrapper = styled.div`
  text-align: center;
  color: white;
`
const FormContainer = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
`
const NameAndEmailWrapper = styled.form`
  display: flex;
`
const Name = styled.input`
  margin-right: 3.2rem;
`
const TextArea = styled.textarea`
  width: 100%;
  margin: 2.4rem 0;
  text-transform: capitalize;
  border-radius: 1.2rem;
  outline: none;
  border: none;
  padding: 1.6rem 2.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  resize: none;
`
const Button = styled.button`
  padding: 0.8rem 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 3.2rem;
  color: white;
  background: ${({ theme }) => theme.color.darkGreen};
  border: none;
  outline: none;
  /* align-self: flex-end; */
  transition: ${({ theme }) => theme.transition.link};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.lightGreen};
  }
`

const Form = () => {
  return (
    <GridContainer className="form-margin">
      <FormWrapper>
        <TitleWrapper>
          <h4>let's connect!</h4>
          <p>Fill in the form and let's create some magic</p>
        </TitleWrapper>
        <FormContainer action="#" id="connect">
          <NameAndEmailWrapper>
            <Name type="text" id="firstName" placeholder="First name" />
            <input type="email" id="email" placeholder="Email" />
          </NameAndEmailWrapper>
          <TextArea
            id="textArea"
            form="connect"
            placeholder="What's on your mind?"
            rows={15}
          ></TextArea>
          <Button>submit</Button>
        </FormContainer>
      </FormWrapper>
    </GridContainer>
  )
}

export default Form
