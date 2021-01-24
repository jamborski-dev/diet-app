import styled from 'styled-components'
import colorScheme from '../../../styles/colorScheme'

const ContentSection = styled.section`
  grid-area: content;
  background: ${colorScheme.bg.light};
  color: ${colorScheme.text.dark};
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