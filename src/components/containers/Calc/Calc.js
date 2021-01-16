// hooks
import useForm from '../../../hooks/useForm'
// import { FlexBox } from '../../elements/FlexBox'

// styled elements
import { 
  FormBox,
  FormGroup,
  FormRow,
  FormLabel,
  FormInput,
  FormInputBox,
  FormHeader
} from '../../elements/FormElements'
import { FormButton } from '../../elements/Button'
import { FlexBox } from '../../elements/FlexBox'

const Form = () => {

  const { 
    state: {
      info: { 
        age, 
        sex, 
        weight, 
        weightUnit, 
        height,  
        heightUnit,  
        activity,
        dietType
      }
    }, 
    methods: {
      setInfo, 
      setBmr,
      setUnit,
      setDiet,
      resetForm
    }
  } = useForm()

  return (
    <FormBox>
      <form>
        <FormHeader>Basic Information</FormHeader>
        <FormGroup>
          <FormRow>
            <FormLabel>Age</FormLabel>
            <FormInput
              onChange={setInfo('age')}
              value={age} 
              inputWidth="60" 
              type="number" min="1" max="150" step="1" />
          </FormRow>
          <FormRow>
            <FormLabel>Sex</FormLabel>
            <FormInput 
              as="select" 
              onChange={setInfo('sex')} 
              inputWidth="60" 
              value={sex}>
              <option value="">-</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </FormInput>
          </FormRow>
          <FormRow>
            <FormLabel>Body weight</FormLabel>
            <FormInputBox>
              <FormInput
                onChange={setInfo('weight')} 
                value={weight}
                type="number" min="1" max="500" step="0.01" 
                inputWidth="60"
              />
              <FormInput
                as="select"
                onChange={setUnit('weight')} 
                value={weightUnit}
                inputWidth="40" >
                <option value="kg" label="kg"/>
                <option value="lbs" label="lbs"/>
                <option value="st" label="st"/>
              </FormInput>
            </FormInputBox>
          </FormRow> 
          <FormRow>
            <FormLabel>Body height</FormLabel>
            <FormInputBox>
              <FormInput
                onChange={setInfo('height')}
                value={height}
                type="number" min="1" max="300" step="1" 
                inputWidth="60" />
              <FormInput
                as="select"
                onChange={setUnit('height')} 
                value={heightUnit}
                inputWidth="40" >
                <option value="cm" label="cm"/>
                <option value="ft" label="ft"/>
              </FormInput>
            </FormInputBox>
          </FormRow>
          <FormRow>
            <FormLabel>Activity level</FormLabel> 
            <FormInput
              inputWidth="60"
              as="select" 
              onChange={setInfo('activity')}
              value={activity}
            >
              <option value="1.1" label="-" />
              <option value="1.2" label="sedentary" />
              <option value="1.375" label="lightly active" />
              <option value="1.55" label="moderately active" />
              <option value="1.725" label="very active" />
              <option value="1.9" label="athlete" />
            </FormInput>            
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormHeader>Diet</FormHeader>
          <FormRow>
            <FormLabel>Pick a diet</FormLabel>
            <FormInput 
              inputWidth="60"
              as="select"
              value={dietType}
              onChange={setDiet()}
            >
              <option value="" label="-"/>
              <option value="greekMedi" label="Greek-Mediterranean Diet" />
              <option value="keto" label="Standard Ketogenic Diet" />
              <option value="carni" label="Carnivour Ketogenic Diet" />
              <option value="paleo" label="Paleo Diet" />
            </FormInput>
          </FormRow>
        </FormGroup>
      </form>
      <FlexBox direction="row" justify="space-between">
        <FormButton 
          color="pink" 
          onClick={resetForm} >Reset Form</FormButton>
        <FormButton 
          color="orange" 
          onClick={setBmr} >Calculate</FormButton>
      </FlexBox>
    </FormBox>
  )
}

export default Form
