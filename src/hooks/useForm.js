import { useContext } from 'react'
import FormContext from '../context/FormContext'

function useForm() {
  return useContext(FormContext)
}
export default useForm