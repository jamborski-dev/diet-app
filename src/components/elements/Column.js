import styled from 'styled-components'

export const Column = styled.div`
  padding: 2rem;
  width: ${({ count }) => count ? `${100 * 1 / count}%` : 'auto'};
`