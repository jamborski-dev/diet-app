import styled from 'styled-components'
import colorScheme from '../../styles/colorScheme'

export const Info = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem;
  background: ${({ error }) => error 
    ? colorScheme.bg.error 
    : colorScheme.bg.warning};
  color: ${({ error }) => error 
    ? colorScheme.text.error 
    : colorScheme.text.warning};
  border-color: ${({ error }) => error 
    ? colorScheme.bg.error 
    : colorScheme.bg.warning};
  border-style: solid;
  border-radius: 0.5rem;
  border-width: 1px;
`