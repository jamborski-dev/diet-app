import styled from 'styled-components'
import colors from '../../../styles/colors'
import dietSchema from '../../../utils/dietSchema'

// elements
import ProgressRing from '../../elements/ProgressRing'
import { FlexBox } from '../../elements/FlexBox'
import { TextStyle } from '../../elements/Typography'
import { CardBox, CardHeader, Description } from '../../elements/CardElements.js'

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

const Macro = ({ macroKey, name, color }) => {
  const { 
    state: {
      dietType,
      macros,
      result: {
        tee
      }
    } 
  } = useForm()

  const macroItem = macros[macroKey]
  const macroValue = macroItem ? parseInt(macroItem.replace('%', '')) : 0
  const progressValue = macroValue === 0 ? 1 : macroValue
  const teePart = tee !== 0 && macroValue !== 0 ? (tee * macroValue / 100).toFixed(0) : '-'
  const grams = tee !== 0 && macroValue !== 0 ? (teePart / (macroKey === 'fat' ? 9 : 4)).toFixed(0) : '-'

  return (
    <MacroItem color={color}>
      <Circle>
        <ProgressRing
          radius={ 60 }
          stroke={ 8 }
          progress={ progressValue }
          color={color}
        />
        <Procentage>{macroValue}%</Procentage>
      </Circle>
      <FlexBox direction="column" justify="flex-start" align="left">
        <MacroName>{name}</MacroName>
        {dietType !== '' &&
          <MacroInfo>
            <TextStyle color={color}>{grams} g</TextStyle> of <TextStyle bold>{name.toLowerCase()}</TextStyle> is equal to <TextStyle color={color}>{teePart} kcal</TextStyle> 

            </MacroInfo>  
        }
      </FlexBox>         
    </MacroItem>
  )
}

const MacroResult = () => {
  const { 
    state: {
      dietType
    } 
  } = useForm()

  const title = dietType !== '' ? dietSchema[dietType].name : '-'
  



  return (
    <CardBox>
      <FlexBox direction="column" justify="flex-start" align="left">
        <span>Macronutrients breakdown</span>
        <CardHeader>{title}</CardHeader>
        {dietType !== '' &&
          <Description>
            {dietSchema[dietType].description}
          </Description>
        }
      </FlexBox>

      <MacroList>

        <Macro
          color={colors.accent.green} 
          name="Carbohydrates"
          macroKey="carb"
        />
        <Macro
          color={colors.accent.orange} 
          name="Proteins"
          macroKey="protein"
        />
        <Macro
          color={colors.accent.pink} 
          name="Fats"
          macroKey="fat"
        />
      </MacroList>
    </CardBox>
  )
}

export default MacroResult
