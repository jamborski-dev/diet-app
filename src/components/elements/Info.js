import styled from 'styled-components'

export const Info = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem;
  background: ${props => props.error ? '#F2BAB9' : '#FBEFB3'};
  color: ${props => props.error ? '#C90629' : '#B6853A'};
  border-color: ${props => props.error ? '#C90629' : '#B6853A'};
  border-style: solid;
  border-radius: 0.5rem;
  border-width: 1px;
`