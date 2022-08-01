import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export interface ThemeType {
    borderRadius: string;

    colors: {
        background: string;
      text: string;
      textSecondary: string
    };
  }

export default createGlobalStyle<{theme: ThemeType}>`
    body, #chakra-modal-1{
    background: ${props => props.theme.colors.background}; 
    }
    
    h1,h2, p, .link {
        color: ${props => props.theme.colors.text}; 
    }
    
    strong{
        color: ${props => props.theme.colors.textSecondary}; 
    }

    nav{
        width: 100%;
    }

    .SocialBtn{
        color: #333;
    }

`;