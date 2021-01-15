import styled from 'styled-components'

const TopSection = styled.section`
  grid-area: 2 / 1 / span 1 / span 3;
  display: flex;
`

const Top = ({ children }) => {
  return (
    <TopSection>
      {children}
    </TopSection>
  )
}

export default Top