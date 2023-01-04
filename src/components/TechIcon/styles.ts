import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  cursor: pointer;
  :hover{
      .tooltip{
        display: block;
      }
  }
  .tooltip{
    position: absolute;
    display: none;
      &-arrow{
          width: 1px;
          border-bottom: 10px solid ${props => props.theme.colors.text};
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          left: -10px;
          bottom: -11px;
        }
        p{
          padding: 0.4rem;
          background: ${props => props.theme.colors.text};
          color: ${props => props.theme.colors.background};
          margin: 0;
    }
  }
`;
