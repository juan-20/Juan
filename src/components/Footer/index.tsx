import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Container } from './styles'

export default function Fotter() {
  return (
    <Container>
      <div className="where">
      <p>Feito com ❤️ em </p>
      {/* <Image 
       width={40}
       height={5}
      src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png'} /> */}
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M256 102L20 256l236 154 236-154-236-154zm0 54a100 100 0 0 1 100 100 100 100 0 0 1-.504 10.014c-48.123-36.173-110.506-57.542-168.914-56.409-6.632.13-13.207.566-19.709 1.286A100 100 0 0 1 256 156zm-65.568 71.73c55.59.133 116.403 22.059 161.045 57.979A100 100 0 0 1 256 356a100 100 0 0 1-100-100 100 100 0 0 1 3.545-25.943c10.012-1.593 20.354-2.352 30.887-2.327z"></path></svg>


      </div>

        <Link href="https://vercel.com">
        <div className="Vercel">
            Powered by{' '}
        <span role="img" aria-label="Vercel logo">
            ▲
        </span>{' '}
        Vercel
      </div>
      </Link>
    </Container>
  )
}
