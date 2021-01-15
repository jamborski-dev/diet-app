import styled from 'styled-components'
import colors from '../../styles/colors'

export const CardBox = styled.div`
  background: ${colors.bg.cardDarkNavy};
  border-radius: 0.4rem;
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 700px;
`

export const CardHeader = styled.h5`
  color: #fff;
  font-size: ${props => props.big ? '2rem' : '1.5rem'};
  margin-top: ${props => props.marginTop ? '2rem' : '0'};
  margin-bottom: ${props => props.noBottomMargin ? '0' : '1rem'};
`