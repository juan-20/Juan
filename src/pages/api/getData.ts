// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  name: string,
  description: string
  link: string
  image: ImageType[]
  tech: tech[]
}

type tech={
  name: 'Github' | 
  'Instagram' | 
  'LinkedIn' | 
  'Firebase' |
  'Next' |
  'Tailwind' |
  'React-Native' |
  'Rest-API'
}

type ImageType={
  url: string,
  alt?: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
    name: 'Airbnb-clone',
    description: 'App que ultiliza a API do Spotify. O usuario ao clicar em login ultiliza sua conta Spotify onde é possível pesquisar por músicas e as reproduzir.',
    link: 'https://github.com/juan-20/Airbnb-clone',
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/airbnb.png?raw=true'
    }],
    tech: [{
      name: 'Next'
    },
    {
      name: 'Tailwind'
    },
    {
      name: 'Rest-API'
    },
  ]
  },
  {
    name: 'Tinder-clone',
    description: 'App mobile, que realiza login usando o login pelo google. Após concluir o cadastro é exibido ao usuario, outros usuarios onde ele pode escolher dar um match ou não. Ao dar um Match aparece uma tela convidando para os dois conversarem, que envia a uma tela de chat onde os dois podem conversar em tempo real.',
    link: 'https://github.com/juan-20/Tinder-clone',
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/tinder.gif?raw=true'
    }],
    tech: [{
      name: 'React-Native'
    },
    {
      name: 'Firebase'
    },
  ]
  }

  ])
}
