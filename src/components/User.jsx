import React from 'react'
import Card from './Card'
import Followers from './Followers'
import styled from 'styled-components'

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card></Card>
        <Followers></Followers>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.section`
  padding-top: 2rem;
  display: grid;
  gap: 3em 2em;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default User
