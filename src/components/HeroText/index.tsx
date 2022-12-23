import React from 'react'
import Social from '../Social'
import { Container } from './styles'

export default function HeroText() {
  return (
    <Container>
      <h1>Hi, i am Juan</h1>
      <div className="social-text">
        <p>
          I live in Brazil, I`&apos;`m 19 years old and I study programming.
          I took a technical course at <span>Cotemig in web/mobile development</span> 
          . I`&apos;`ve been working at <span>Kukac</span> since 2020 as a Front-End Development and Tester.
          ✏️
        </p>
        <Social />
      </div>
    </Container>
  ) 
}
