import styled from 'styled-components'
import colorScheme from '../../styles/colorScheme'
import { FlexBox } from './FlexBox'

export const FormBox = styled.div`
  background: ${colorScheme.bg.light};
  color: ${colorScheme.text.dark};
  border-radius: 0.35rem;
  width: min(100%, 500px);
  margin-bottom: 3rem;
  padding: 2rem;
`

export const FormHeader = styled.h3`
  color: ${colorScheme.text.headerDark};
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
`

export const FormRow = styled(FlexBox)`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  line-height: 1.3rem;
  border-bottom-width: 1px; 
  border-bottom-style: solid;
  border-bottom-color: ${colorScheme.accent.inputSeparator};

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
  color: ${colorScheme.text.input};
  padding: 0.5rem;
  text-align: left;
  border: none;
  
  width: ${({ inputWidth }) => inputWidth === null ? '100%' : `${inputWidth}%` };
  
  & > option {
    text-align: right;
  }
`