import Link from 'next/link'
import React from 'react'
import {FiGithub} from 'react-icons/fi'
import Button from '../Button'
import { Container } from './styles'

export default function Social() {
  return (
    <Container>
        <Link passHref href='https://github.com/juan-20'>
         <div className="btn">
           <Button 
           color='black'
           size='base' 
           icon='Github'
           backgroundColor='grey' 
           label='Github' />
           </div>
        </Link>
        <Link passHref href='https://www.linkedin.com/in/juan-andrade-811017190/'>
         <div className="btn">
           <Button 
           color='black'
           size='base' 
           icon='LinkedIn'
           backgroundColor='blue' 
           label='LinkedIn' />
            </div>
        </Link>
        <Link passHref href='https://www.instagram.com/juann.jpg/'>
         <div className="btn">
           <Button 
           color='white'
           size='base' 
           icon='Instagram'
           backgroundColor='pink' 
           label='Instagram' />
            </div>
        </Link>

        
    </Container>
  )
}
