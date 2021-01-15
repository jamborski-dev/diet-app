import styled from 'styled-components'
import colors from '../../../styles/colors'

const ContentSection = styled.section`
  grid-area: content;
  background: ${colors.bg.white};
  color: ${colors.typography.textDark};
  padding: 2rem;
  margin-top: -1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 1rem;
`

const Content = ({ children }) => {
  return (
    <ContentSection>
      {children}
    </ContentSection>
  )
}

export default Content