import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  name: string,
  description: string
  link: string
  image: ImageType[]
  tech: tech[]
  isFinished: boolean
}

type tech={
  name: 'Github' | 
  'Instagram' | 
  'LinkedIn' | 
  'Firebase' |
  'Next' |
  'Tailwind' |
  'React-Native' |
  'Rest-API',
  description: string
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
    description: 'Utilizando a API do Next.js, foi criado um banco de dados com informações fictícias sobre quartos para alugar que são exibidos para que você possa pesquisar por cidades e ver mais informações sobre o quarto, além de poder pesquisar por tipo de localização.',
    link: 'https://github.com/juan-20/Airbnb-clone',
    isFinished: true,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/airbnb.png?raw=true'
    }],
    tech: [{
      name: 'Next',
      description: 'Next.js é uma estrutura front-end que traz configurações de SEO e API REST integradas'
    },
    {
      name: 'Tailwind',
      description: 'Uma estrutura CSS baseada em utilitários, repleta de classes, que pode ser composta para criar qualquer design, diretamente no HTML.'
    },
    {
      name: 'Rest-API',
      description: 'Usando um JSON como mock para trazer as informações'
    },
  ]
  },
  {
    name: 'Tinder-clone',
    description: 'Aplicativo móvel, que realiza o login usando login pelo google. Após concluir o cadastro, o usuário é mostrado a outros usuários onde ele pode optar por combinar ou não. Ao dar um Match, aparece uma tela convidando os dois para conversar, que remete para uma tela de chat onde os dois podem conversar em tempo real.',
    link: 'https://github.com/juan-20/Tinder-clone',
    isFinished: true,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/tinder.png?raw=true'
    }],
    tech: [{
      name: 'React-Native',
      description: 'Biblioteca para criar apps nativos para Android, iOS usando React' 

    },
    {
      name: 'Firebase',
      description: 'Firebase dá uma solução simples para a utenticação de usuarios e armazenamento de dados em tempo real'
    },
  ]
  },
  {
    name: 'RPG Character Record',
    description: 'Site criado para armazenar ficha de personagem rpg. Crie a sua conta e tenha acesso ao seu ficheiro com todas as funcionalidades em qualquer lugar, podendo alterá-lo em tempo real.',
    link: 'https://github.com/juan-20/RPG',
    isFinished: false,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/rpg.png?raw=true'
    }],
    tech: [{
      name: 'Next',
      description: 'Next.js é uma estrutura front-end que traz configurações de SEO e API REST integradas'

    },
    {
      name: 'Firebase',
      description: 'Firebase dá uma solução simples para a utenticação de usuarios e armazenamento de dados em tempo real'
    },
  ]
  },
  {
    name: 'Twitter UI Clone',
    description: 'Clone de Design do twitter com vários breakpoints',
    link: 'https://github.com/juan-20/Twitter-UI-Clone',
    isFinished: true,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/twitter.png?raw=true'
    }],
    tech: [{
      name: 'React-Native',
      description: 'Uma biblioteca JavaScript para criação de front-end'

    },
  ]
  }

  ])
}
