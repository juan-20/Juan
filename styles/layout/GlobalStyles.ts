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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
    body{
        background: ${props => props.theme.colors.background}; 
        font-family: 'Source Sans Pro', sans-serif;
    }
    
        :root {
            --text-xs: clamp(0.87rem, calc(0.72rem + 0.72vw), 1.28rem);
            --text-sm: clamp(1.04rem, calc(0.85rem + 0.97vw), 1.6rem);
            --text-md: clamp(0.87rem, calc(0.72rem + 0.72vw), 1.28rem);
            --text-lg: clamp(1.04rem, calc(0.85rem + 0.97vw), 1.6rem);
            --text-xl: clamp(1.8rem, calc(1.34rem + 2.3vw), 3.13rem);
            --text-2xl: clamp(2.16rem, calc(1.55rem + 3.04vw), 3.91rem);
            --text-3xl: clamp(2.59rem, calc(1.79rem + 3.98vw), 4.88rem);
            --text-4xl: clamp(1.25rem, calc(0.99rem + 1.3vw), 2rem);
        }

        h1 {
        font-size: var(--text-4xl);
        }

        h2 {
            font-size: var(--text-lg);
        }

        h3 {
        font-size: var(--text-2xl);
        }

        h4 {
        font-size: var(--text-xl);
        }

        h5 {
        font-size: var(--text-lg);
        }

        p {
        font-size: var(--text-md);
        }

        h6 {
        font-size: var(--text-sm);
        }

        caption {
        font-size: var(--text-xs);
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
        margin: 1rem 0;
        padding: 0;
        text-align: left;
        font-family: 'Source Sans Pro', sans-serif;
        color: ${props => props.theme.colors.text}; 
        }
    
    strong, span{
        color: ${props => props.theme.colors.secondary}; 
    }

    nav{
        width: 100%;
    }

    .SocialBtn{
        color: #333;
    }

    .pointer{
        cursor: pointer;
    }

    .center{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

`;