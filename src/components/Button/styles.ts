import styled from "styled-components";
import {darken} from 'polished'

interface ButtonProps{
    backgroundColor: string
    size: string
    color: string
  }
  

export const CustomButton = styled.button<ButtonProps>`
    background: ${props => props.backgroundColor};
    min-width: ${props => props.size};
    height: 2.5rem;
    font-weight: bold;
    color: ${props => props.color};
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: inherit;
    border: none;
    gap: 1rem;
    @media only screen and (min-width: 1920px) {
        height: 3rem;
        width: 250px;
    }
    i{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
    }
    :hover{
        filter: brightness(80%)
    }
    :focus{
        border: 1px solid #333;
    }
`;