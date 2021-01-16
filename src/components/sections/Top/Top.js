import styled from 'styled-components'

const TopSection = styled.section`
  /* grid-area: 2 / 1 / span 1 / span 3;
  display: flex; */

  background: linear-gradient(#21243D, #3A406E);
  color: var(--text-primary-light);
`

const Top = ({ children }) => {
  return (
    <TopSection>
      {children}
    </TopSection>
  )
}

export default Top