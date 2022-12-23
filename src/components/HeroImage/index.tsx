import Image from 'next/image'
import React from 'react'
import me from '../../../public/eu.png'
import { Container } from './styles'

export default function HeroImage() {
  return (
    <Container>
      <Image 
      src={me} 
       width={300}
       height={300}
       layout='intrinsic'
       alt='Profile Picture'
      />
    </Container>
  )
}
