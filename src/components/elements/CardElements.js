import styled from 'styled-components'
import colorScheme from '../../styles/colorScheme'

export const CardBox = styled.div`
  background: ${colorScheme.bg.cardDark};
  border-radius: 0.4rem;
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (min-width: 590px) {
    width: 500px;
  }
`

export const CardHeader = styled.h5`
  color: #fff;
  font-size: ${({ big }) => big ? '2rem' : '1.5rem'};
  margin-top: ${({ marginTop }) => marginTop ? '2rem' : '0'};
  margin-bottom: ${({ noBottomMargin }) => noBottomMargin ? '0' : '1rem'};
`
export const Description = styled.span`
  color: ${colorScheme.text.accentBlue};
  font-size: .8rem;
  /* margin-top: 1rem; */
  margin-bottom: 1rem;
  line-height: 1.3rem;
  font-weight: 300;
`