import React from 'react'
import Social from '../Social'
import { Container } from './styles'

export default function HeroText() {
  return (
    <Container>
      <h1>Hi, i am Juan</h1>
      <div className="social-text">
        <p>
          I live in Brazil, I&apos;m 20 years old and I've been working as web developer since 2020 <br/>
          I took a technical course at <span>Cotemig in web/mobile development</span> 
          . I&apos;ve been working at <span>Kukac</span> as a Front-End Development and Tester.
          ✏️
        </p>
        <Social />
      </div>
    </Container>
  ) 
}
