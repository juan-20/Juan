import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CaretDown, Moon, SignOut, Sun } from 'phosphor-react';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void ;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <p></p>
      <div onClick={toggleTheme} className="pointer">
               {title === 'light' ? 
               <Sun weight="bold" role="button"  size={32} /> 
                  :
                <Moon weight="bold" role="button" size={32} />
                }
      </div>
    </Container>
  );
}
