import React from 'react'
import Social from '../Social'
import { Container } from './styles'
import Image from 'next/image'

export default function HeroText() {
  return (
    <Container>
      <div className="title">
        <h1>Featured Front-End Projects</h1>
        {/* <Image
        width='64px'
        height='64px'
        src={'https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif'}
        /> */}
      </div>
      <div className="social-text">
        <p>
          I live in Brazil, I&apos;m 20 years old and I&apos;ve been working as web developer since 2020 <br/>
          I took a technical course at <span>Cotemig in web/mobile development</span> 
          . I&apos;ve been working at <span>Kukac</span> as a Front-End Development and Tester.
          ✏️
        </p>
        <Social />
      </div>
    </Container>
  ) 
}
