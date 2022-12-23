import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1{
        text-align: center;
        padding: 3rem 3rem 0rem 3rem;
        @media only screen and (max-width: 600px) {
            padding: 1rem 1rem 0rem 1rem;
        }
    }
    >p{
        padding: 0rem 3rem 3rem 3rem;
        @media only screen and (max-width: 600px) {
            padding: 0rem;
            padding-bottom: 3rem;
        }
    }

`;
