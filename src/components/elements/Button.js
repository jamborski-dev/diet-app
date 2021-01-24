import styled from 'styled-components'
import colorScheme from '../../styles/colorScheme'

export const Button = styled.button`
  background: none;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${colorScheme.bg.light};
  padding: .7rem 1.2rem;
  color: ${colorScheme.text.light};
  cursor: pointer;

  &:hover {
    background: ${colorScheme.accent.pink};
    border-color: ${colorScheme.accent.pink};
  }
`

export const FormButton = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  color: ${({ color }) => color 
    ? colorScheme.accent[color] 
    : colorScheme.accent.blue };
  font-size: 0.9rem;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`