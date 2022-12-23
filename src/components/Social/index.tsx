import Link from 'next/link'
import React from 'react'
import {FiGithub} from 'react-icons/fi'
import Button from '../Button'
import { Container } from './styles'

export default function Social() {
  return (
    <Container>
        <Link href='https://github.com/juan-20'>
           <Button 
           color='black'
           size='base' 
           icon='Github'
           backgroundColor='grey' 
           label='Github' />
        </Link>
        <Link href='https://github.com/juan-20'>
           <Button 
           color='white'
           size='base' 
           icon='LinkedIn'
           backgroundColor='blue' 
           label='LinkedIn' />
        </Link>
        <Link href='https://github.com/juan-20'>
           <Button 
           color='white'
           size='base' 
           icon='Instagram'
           backgroundColor='pink' 
           label='Instagram' />
        </Link>

        
    </Container>
  )
}
