// lib
import { convertUnit } from '../utils/helpers'
import dietSchema from '../utils/dietSchema'

// hooks
import { useState } from 'react'

// context
import FormContext from './FormContext'

export const FormContextProvider = ({ children }) => {
  
  const DEFAULT_STATE = {
    info: {
      age: 27,
      sex: 'male',
      weight: 80,
      weightUnit: 'kg',
      height: 178,
      heightUnit: 'cm',
      activity: 0,
    },
    result: {
      bmr: 0,
      tee: 0  
    },
    macros: {
      protein: 0,
      fat: 0,
      carb: 0
    },
    dietType: ''
  }

  const [state, setState] = useState(DEFAULT_STATE)

  const resetForm = e => {
    e.preventDefault()
    setState(DEFAULT_STATE)
  }

  const setInfo = key => {
    return ({ target: { value } }) => {
      setState(prevState => ({
        ...prevState, info: { ...prevState.info, [key]: value }
      }));
    } 
  }

  const setUnit = key => {
    return ({ target: { value: unit } }) => {
      const unitProperty = key.concat('Unit')
      const propertyValue = state.info[key]
      const prevUnit = state.info[unitProperty]
      if (prevUnit === unit) return
      
      let newValue;
      // mass
      if (unit === 'kg') {
        if (prevUnit === 'st') newValue = convertUnit.st2kg(propertyValue)
        if (prevUnit === 'lbs') newValue = convertUnit.lbs2kg(propertyValue)
      }
      if (unit === 'lbs') {
        if (prevUnit === 'kg') newValue = convertUnit.kg2lbs(propertyValue)
        if (prevUnit === 'st') newValue = convertUnit.st2lbs(propertyValue)
      }
      if (unit === 'st') {
        if (prevUnit === 'kg') newValue = convertUnit.kg2st(propertyValue)
        if (prevUnit === 'lbs') newValue = convertUnit.lbs2st(propertyValue)
      }
      // lenght
      if (unit === 'cm') newValue = convertUnit.ft2cm(propertyValue)
      if (unit === 'ft') newValue = convertUnit.cm2ft(propertyValue)

      console.log(`${propertyValue}${prevUnit} to ${unit} = ${newValue}`)

      setState(prevState => ({
        ...prevState, info: {
          ...prevState.info, [unitProperty]: unit, [key]: newValue
        }
      }))
    }
  }

  const setBmr = () => {
    const {
      info: { 
        age, 
        sex, 
        weight, 
        weightUnit, 
        height, 
        heightUnit, 
        activity 
      }
    } = state
    
    let newBmr
    if (age !== 0 && 
        sex !== '' && 
        weight !== 0 && 
        height !== 0 && 
        activity !== 0) {

      // TODO check if unit have to be converted
      let weightInKg; 
      let heightInCm; 
      if (weightUnit === 'kg') weightInKg = weight
      if (weightUnit === 'st') weightInKg = convertUnit.st2kg(weight)
      if (weightUnit === 'lbs') weightInKg = convertUnit.lbs2kg(weight)
      if (heightUnit === 'cm') heightInCm = height
      if (heightUnit === 'ft') heightInCm = convertUnit.ft2cm(height)

      if (sex === 'male') newBmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5
      if (sex === 'female') newBmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161 
      

      setState(prevState => ({ 
        ...prevState, result: {
          ...prevState.result, 
            bmr: newBmr, 
            tee: newBmr * activity 
        }
      }))      
    }
  }

  const setDiet = () => {
    return ({ target: { value } }) => {
      setState(prevState => ({
        ...prevState,
        dietType: value
      }))
      setMacros(value)
    }
  }

  const setMacros = dietType => {
    const proteins  = dietSchema[dietType].macro.proteins
    const fats      = dietSchema[dietType].macro.fats
    const carbs     = dietSchema[dietType].macro.carbs

    setState(prevState => ({
      ...prevState,
      macros: {
        proteins, fats, carbs
      }
    }))
    console.log(state.macros)
  }

  return (
    <FormContext.Provider
      value={{
        state,
        methods: {
          setInfo,
          setBmr,
          setDiet,
          setUnit,
          resetForm,
          setMacros
        }
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

