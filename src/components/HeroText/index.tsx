import React from 'react'
import Social from '../Social'
import { Container } from './styles'
import Image from 'next/image'

type LangText={
  lang: 'BR' | 'EN'
}

export default function HeroText(props: LangText) {
  return (
    <Container>
      <div className="title">
        {props.lang === 'EN' ?
        <h1>Featured Front-End Projects</h1>
        :
        <h1>Projetos front-end em destaque</h1>
        }
        {/* <Image
        width='64px'
        height='64px'
        src={'https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif'}
        /> */}
      </div>
      <div className="social-text">
        {props.lang === 'EN' ?
        <p>
          I live in Brazil, I&apos;m 20 years old and I&apos;ve been working as web developer since 2020 <br/>
          I took a technical course at <span>Cotemig in web/mobile development</span> 
          . I&apos;ve been working at <span>Kukac</span> as a Front-End Development and Tester.
          ✏️
        </p>
        : <p>
            Moro no Brasil, tenho 20 anos e trabalho como desenvolvedor web desde 2020 <br/>
            Fiz curso técnico na <span>Cotemig em desenvolvimento web/mobile</span> 
            . Trabalho na <span>Kukac</span> como Desenvolvedor Front-End e Tester. ✏️
          </p>  }
        <Social />
      </div>
    </Container>
  ) 
}
