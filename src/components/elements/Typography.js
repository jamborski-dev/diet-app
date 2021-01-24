import styled from 'styled-components'
import colorScheme from '../../styles/colorScheme'

export const TextStyle = styled.span`
  font-weight: ${({ bold }) => bold ? 600 : 400};
  color: ${({ color }) => color ? color : 'inherit'};
`

export const H2 = styled.h2`
  font-size: 1.9rem;
  position: relative;
  margin-top: 0;
  margin-bottom: 3rem;

  &:after {
    display: block;
    position: absolute;
    z-index: 100;
    width: min(20%, 100px);
    height: 3px;
    left: 0;
    bottom: -10px;
    content: " ";
    border-radius: 5px;
    background: ${colorScheme.accent.green};
  }
`