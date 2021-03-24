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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
const TitleWrapper = styled.div`
  text-align: center;
  color: white;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    margin: 0 1.6rem;
  }
`
const FormContainer = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
`
const NameAndEmailWrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    flex-direction: column;
  }
`
const Name = styled.input`
  margin-right: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    margin-bottom: 2.4rem;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  margin: 2.4rem 0;
  border-radius: 1.2rem;
  outline: none;
  border: none;
  padding: 1.6rem 2.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  resize: none;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    margin-bottom: 2.4rem;
    max-height: 20rem;
  }
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

  &:focus {
    background: ${({ theme }) => theme.color.lightGreen};
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.lightGreen};
  }
`

const FormBox = () => {
  return (
    <GridContainer className="form-margin">
      <FormWrapper>
        <TitleWrapper>
          <h4>let's connect!</h4>
          <p>Fill in the form and let's create some magic</p>
        </TitleWrapper>
        <FormContainer
          action="https://getform.io/f/47044ea9-307a-48c4-9768-6d0775db5e10"
          method="POST"
          name="email-form"
        >
          <NameAndEmailWrapper>
            <Name type="text" name="name" placeholder="First name" />
            <input type="email" name="email" placeholder="Email" />
          </NameAndEmailWrapper>
          <TextArea
            name="message"
            placeholder="What's on your mind?"
            rows={15}
          ></TextArea>
          <Button type="submit">submit</Button>
        </FormContainer>
      </FormWrapper>
    </GridContainer>
  )
}

export default FormBox
