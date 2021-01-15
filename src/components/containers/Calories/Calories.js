// hooks
import useForm from "../../../hooks/useForm";

// elements
import { FlexBox } from '../../elements/FlexBox'
import { Info } from '../../elements/Info'
import { CardBox, CardHeader } from '../../elements/CardElements'

const Calories = () => {
  const { state: { result: { bmr, tee } } } = useForm()

  return (
    <CardBox>
        <FlexBox direction="row" justify="space-between" align="baseline">
          <span>
            <CardHeader big noBottomMargin>BMR</CardHeader>
            <span>Basic Metabolic Rate</span>
          </span>
          <span>
            <CardHeader noBottomMargin>
              {bmr !== 0 ? (bmr).toFixed(0) : '-'}
            </CardHeader>
            <span>kcal / day</span>
          </span>
        </FlexBox>
        <FlexBox direction="row" justify="space-between" align="baseline">
          <span>
            <CardHeader big noBottomMargin marginTop>TEE</CardHeader>
            <span>Total Energy Expenditure</span>
          </span>
          <span>
            <CardHeader noBottomMargin>
              {tee !== 0 ? (tee).toFixed(0) : '-'}
            </CardHeader>
            <span>kcal / day</span>
          </span>
        </FlexBox>
    </CardBox>
  )
}

export default Calories