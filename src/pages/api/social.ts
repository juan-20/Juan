// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  Social: social[]
}

type social = {
  name: string,
  link: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    {
    Social: [{
      name: 'Github',
      link: 'https://github.com/juan-20'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/juan-andrade-811017190/'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/juann.jpg/'
    },
  ]
  }

  )
}
