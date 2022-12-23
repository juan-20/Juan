import styled from 'styled-components';

export const Container = styled.div`

    @media only screen and (max-width: 1920px) {
        padding: 0 15rem 0 15rem;
    }
    @media only screen and (max-width: 1020px) {
        padding: 0 5rem 0 5rem;
    }
    @media only screen and (max-width: 425px) {
        padding: 0 1rem 0 1rem;
    }
    .hero{
        padding-top: 2.5rem;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        @media only screen and (min-width: 1300px) {
            flex-direction: row;
        }

    }

    .divider{
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 100%;
        border: 1px solid #333;
    }
`;
