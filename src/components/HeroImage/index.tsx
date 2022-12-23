import Image from 'next/image'
import React from 'react'
import me from '../../../public/Iconeanimado-Juan.gif'
import { Container } from './styles'

export default function HeroImage() {
  return (
    <Container>
      <Image 
      src={me} 
       width={300}
       height={300}
       layout='intrinsic'
      />
    </Container>
  )
}
