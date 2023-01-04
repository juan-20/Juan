import styled from 'styled-components';

export const Container = styled.nav`
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        box-sizing: border-box;
        padding: 2rem;
        border-bottom: 1px solid ${props => props.theme.colors.text};

        h5{
            background: linear-gradient(
                to right,
                #f09819,
                #edde5d,
                #f09819
            );
            background-size: 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            white-space: nowrap;
        }
        .flex{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
`;
