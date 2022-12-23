import React from 'react'
import Image from 'next/image'
import { Data } from '../../pages/api/getData'
import { Container } from './styles'
import Button from '../Button'

export default function Project(props: Data) {
  const {name,
    description,
    link,
    image,
    tech} = props
    console.log(tech)
  return (
    <Container>
      <h5>{name}</h5>
      <p>{description}</p>
      <div className="image">
      <Image 
      className='img'
      quality={10}
      src={image[0].url}
        width={500}
        height={300}
      />
      <div className="tech">
        {tech.map((e) => 
          <Button
          backgroundColor='transparent'
          icon={e.name}
          />
        )}
      </div>
      </div>
    </Container>
  )
}
