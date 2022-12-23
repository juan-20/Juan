import styled from 'styled-components';

export const Container = styled.div`
    .image{
        .img{
            filter: blur(5px);
        }
        .tech{
            position: absolute;
            left: 35%;
            transform: translate(-50%, -150%);
            backdrop-filter: blur(800px);
            z-index: 999;
            position: absolute;
        }
    }
    :hover{
        .image{
            .tech{
                svg{
                    path{
                fill: ${props => props.theme.colors.secondary};
                    }
                }
            }
        }
    }
`;
