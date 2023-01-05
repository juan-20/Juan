import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CaretDown, Moon, SignOut, Sun } from 'phosphor-react';
import { Container } from './styles';
import { GiUsaFlag } from 'react-icons/gi'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
interface HeaderProps {
  toggleTheme(): void ;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <Container>
      <p></p>
      <div onClick={toggleTheme} className="pointer flex">
               {/* {title === 'light' ? 
               <Sun weight="bold" role="button"  size={32} /> 
                  :
                <Moon weight="bold" role="button" size={32} />
              } */}
                {router.pathname==='/pt' ?
              <Link href='/en' >
              <Image
              width='25px'
              height='25px'
              src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png'}
              />
              </Link>
              :
              <Link href='/pt' >
              <Image
              width='25px'
              height='25px'
              src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png'}
              />
              </Link>}
      </div>
    </Container>
  );
}
