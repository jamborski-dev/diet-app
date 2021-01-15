import styled from 'styled-components'

export const Column = styled.div`
  padding: 2rem;
  width: ${props => props.count ? `${100 * 1 / props.count}%` : 'auto'};
`