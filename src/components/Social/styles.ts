import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: row;
        gap: 2rem;
        button{
                padding: 0.5rem 1rem 0.5rem 1rem;
        }
        @media only screen and (max-width: 600px) {
                flex-direction: column;           
        }
`;