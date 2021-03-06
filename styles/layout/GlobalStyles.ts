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

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
    body, #chakra-modal-1{
    background: ${props => props.theme.colors.background}; 
    }
    
    .Social-btn{
        color: #000;
    }

    h1,h2, p, .chakra-link {
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

    #mobile{
    height: 667px;
    width:  375px;
    }
    #tablet{
    height: 600px;
    width:  700px;
    }

    .ImageCarousel{
        height: 667px;
    width:  375px;
    }
`;