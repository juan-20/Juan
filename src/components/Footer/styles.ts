import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
    .where{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        p{
            font-size: 1rem;
        }
        svg{
            background: #009b3a;
            border-radius: 2px;
            fill: ${props => props.theme.colors.secondary};
        }
    }
    .Vercel{
        font-weight: bold;
    }
    span{
        color: ${props => props.theme.colors.text};
    }
    @media only screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;