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
    description: 'Using Next.js API, a database was created with fictitious information about rooms for rent that are displayed so that you can search for cities and see more information about the room, in addition to being able to search by type of location.',
    link: 'https://github.com/juan-20/Airbnb-clone',
    isFinished: true,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/airbnb.png?raw=true'
    }],
    tech: [{
      name: 'Next',
      description: 'Next. js is a front-end framework which brings SEO configurations and REST API built-in'
    },
    {
      name: 'Tailwind',
      description: 'A utility-first CSS framework packed with classes, that can be composed to build any design, directly in your markup.'
    },
    {
      name: 'Rest-API',
      description: 'Was created a mock API in Next.js to bring information to the front'
    },
  ]
  },
  {
    name: 'Tinder-clone',
    description: 'Mobile app, which performs login using login by google. After completing the registration, the user is shown other users where he can choose to match or not. When giving a Match, a screen appears inviting the two to talk, which sends to a chat screen where the two can talk in real time.',
    link: 'https://github.com/juan-20/Tinder-clone',
    isFinished: true,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/tinder.png?raw=true'
    }],
    tech: [{
      name: 'React-Native',
      description: 'Library to create native apps for Android, iOS, and more using React'

    },
    {
      name: 'Firebase',
      description: 'Using firebase authentication for fast login and its NoSQL database to store user information'
    },
  ]
  },
  {
    name: 'RPG Character Record',
    description: 'website created to store rpg character sheet. Create your account and have access to your file with all the functionalities anywhere, being able to change it in real time.',
    link: 'https://github.com/juan-20/RPG',
    isFinished: false,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/rpg.png?raw=true'
    }],
    tech: [{
      name: 'Next',
      description: 'Next. js is a front-end framework which brings SEO configurations and REST API built-in'

    },
    {
      name: 'Firebase',
      description: 'Using firebase authentication for fast login and its NoSQL database to store user information'
    },
  ]
  },
  {
    name: 'Twitter UI Clone',
    description: 'website created to store rpg character sheet. Create your account and have access to your file with all the functionalities anywhere, being able to change it in real time.',
    link: 'https://github.com/juan-20/Twitter-UI-Clone',
    isFinished: true,
    image: [{
      url: 'https://github.com/juan-20/Juan/blob/main/src/assets/projects/twitter.png?raw=true'
    }],
    tech: [{
      name: 'React-Native',
      description: 'A JavaScript library for creating user interfaces'

    },
  ]
  }

  ])
}
