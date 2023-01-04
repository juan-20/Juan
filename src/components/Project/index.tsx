import React from 'react'
import Image from 'next/image'
import { Data } from '../../pages/api/getData'
import { Container } from './styles'
import Button from '../Button'
import Link from 'next/link'
import TechIcon from '../TechIcon'

export default function Project(props: Data) {
  const {name,
    description,
    link,
    image,
    tech,
    isFinished} = props
  return (
    <Container>
      <div className="title">
      <h2>{name}</h2>
      {isFinished===false ? 
        <TechIcon 
        icon='inProgress'
        description='Not finished' />
        : null}
        </div>
      <p>{description}</p>
      <div className="image">
        <Image 
        className='img'
        quality={10}
        src={image[0].url}
        alt={name+"picture"}
          width={500}
          height={300}
        />
      </div>
      <div className="bottom">
      <div className="tech">
        {tech.map((e) => 
          <TechIcon
          key={e.name}
          icon={e.name}
          description={e.description}
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
