import styled from 'styled-components'
import colorScheme from '../../../styles/colorScheme'

const TopSection = styled.section`
  /* grid-area: 2 / 1 / span 1 / span 3;
  display: flex; */

  background: ${`linear-gradient(${colorScheme.bg.gradStart}, ${colorScheme.bg.gradStart})` };
  color: ${colorScheme.text.light};
`

const Top = ({ children }) => {
  return (
    <TopSection>
      {children}
    </TopSection>
  )
}

export default Top