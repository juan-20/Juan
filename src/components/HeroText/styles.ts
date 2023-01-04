import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
    >p{
        padding: 0rem 3rem 3rem 3rem;
        @media only screen and (max-width: 600px) {
            padding: 0rem;
            padding-bottom: 3rem;
        }
    }
    @media only screen and (max-width: 600px) {
        padding: 0rem;
        padding: 3rem 0 3rem 0;
        .social-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

`;
