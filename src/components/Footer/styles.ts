import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .where{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        p{
            font-size: 1rem;
        }
    }
    .Vercel{
        font-weight: bold;
    }
    span{
        color: #000;
    }
`;