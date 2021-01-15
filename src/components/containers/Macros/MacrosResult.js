import styled from 'styled-components'
import colors from '../../../styles/colors'
import dietSchema from '../../../utils/dietSchema'

// elements
import ProgressRing from '../../elements/ProgressRing'
import { FlexBox } from '../../elements/FlexBox'
import { CardBox, CardHeader } from '../../elements/CardElements.js'

// hooks
import useForm from '../../../hooks/useForm'

const Circle = styled.div`
  /* border: 2px solid red; */
  position: relative;
`
const MacroList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: -.8rem;
  margin-bottom: 0;
`
const MacroItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.color};  
`
const MacroName = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 3px;
`
const MacroInfo = styled.span`
  color: #fff;
  font-size: 0.9rem;
`
const Procentage = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  position: absolute;
  top: 49%;
  left: 51%;
  transform: translate(-50%, -50%);
`

const Macro = ({ value, name, info, color }) => {
  
  return (
    <MacroItem color={color}>
      <Circle>
        <ProgressRing
          radius={ 60 }
          stroke={ 8 }
          progress={ value }
          color={color}
        />
        <Procentage>{value}%</Procentage>
      </Circle>
      <FlexBox direction="column" justify="flex-start" align="left">
        <MacroName>{name}</MacroName>
        <MacroInfo>{info}</MacroInfo>  
      </FlexBox>         
    </MacroItem>
  )
}

const MacroResult = () => {
  const { 
    state: {
      dietType, 
      macros: {
        protein, fat, carb
      } 
    } 
  } = useForm()
  const title  = dietSchema[dietType].name



  return (
    <CardBox>
      <FlexBox direction="column" justify="flex-start" align="left">
        <span>Your macro for</span>
        <CardHeader>{title ? title : '-'}</CardHeader>
      </FlexBox>

      <MacroList>

        <Macro
          color={colors.accent.green} 
          name="Carbohydrates"
          value={carb}
          info="Up to 20g/day. Avoid!"        
        />
        <Macro
          color={colors.accent.orange} 
          name="Proteins"
          value={protein}
          info="Products red meat, beans, eggs."        
        />
        <Macro
          color={colors.accent.pink} 
          name="Fats"
          value={fat}
          info="Products like avocado, eggs, bacon."        
        />
      </MacroList>
    </CardBox>
  )
}

export default MacroResult
