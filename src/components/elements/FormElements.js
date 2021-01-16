import styled from 'styled-components'
import { FlexBox } from './FlexBox'
import colors from '../../styles/colors'

export const FormBox = styled.div`
  background: var(--bg-light);
  color: var(--text-secondary-dark);
  border-radius: 0.35rem;
  max-width: 700px;
  margin-bottom: 3rem;
  padding: 2rem;
`

export const FormHeader = styled.h3`
  color: ${colors.typography.headerDark};
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
`

export const FormRow = styled(FlexBox)`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  line-height: 1.3rem;
  border-bottom: 1px solid #d6d6d6;

  &:last-child {
    margin-bottom: 1rem;
  }
`

export const FormGroup = styled.div`
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
`

export const FormLabel = styled.label`
  font-size: 1rem;
  width: 40%;
  text-align: left;
  margin-right: 1rem;
`
export const FormInputBox = styled.div`
  width: 60%;
`
export const FormInput = styled.input`
  font-size: 1.2rem;
  font-size: 'Montserrat';
  color: #7c7c7c;
  padding: 0.5rem;
  text-align: left;
  border: none;
  
  width: ${props => props.inputWidth === null ? '100%' : `${props.inputWidth}%` };
  
  & > option {
    text-align: right;
  }
`