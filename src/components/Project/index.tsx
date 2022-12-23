import React from 'react'
import Image from 'next/image'
import { Data } from '../../pages/api/getData'
import { Container } from './styles'
import Button from '../Button'
import Link from 'next/link'

export default function Project(props: Data) {
  const {name,
    description,
    link,
    image,
    tech} = props
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
      </div>
      <div className="bottom">
      <div className="tech">
        {tech.map((e) => 
          <Button
          key={e.name}
          backgroundColor='transparent'
          icon={e.name}
          />
        )}
      </div>
        <Link
        href={link} passHref>
          <div className="btn">
            <Button
            icon='Link'
            backgroundColor='green'
            label='Código-fonte'
            />
            </div>
        </Link>
      </div>
    </Container>
  )
}
