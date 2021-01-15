import styled from 'styled-components'
import colors from '../../styles/colors'

export const Button = styled.button`
  background: none;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  padding: .7rem 1.2rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: var(--accent-pink);
    border-color: var(--accent-pink);
  }
`

export const FormButton = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  color: ${props => props.color ? colors.accent[props.color] : colors.accent.blue };
  font-size: 0.9rem;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`