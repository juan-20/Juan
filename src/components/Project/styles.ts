import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    box-shadow: ${props => props.theme.colors.shadow};
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
        >svg{
            fill: #fab105;
            color: #fab105;
        }
    }
    }
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        /* .img{
            filter: blur(3px);
        } */
        @media only screen and (max-width: 1300px) {
            justify-content: center;
        }
    }
    .tech{
        display: flex;
        max-width: 500px;
        overflow: auto;
        svg{
        fill: ${props => props.theme.colors.textSecondary};
        }
        svg{
            path{
        fill: ${props => props.theme.colors.textSecondary};
            }
        }
    }
    .bottom{
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }
`;
