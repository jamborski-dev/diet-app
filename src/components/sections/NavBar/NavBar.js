// libs
// import styled from 'styled-components'

// elements
import { FlexBox } from '../../elements/FlexBox'
import { Button } from '../../elements/Button'
import {
  NavBarBox,
  LogoBg,
  LogoImage,
  LogoText,
  LogoTitle,
  Menu,
  MenuList,
  MenuItem
} from '../../elements/NavBarElements'


// resources
import Avocado from '../../../images/svg/avocado.svg'

function NavBar() {
  return (
    <FlexBox as={NavBarBox} direction="row" justify="space-between" align="center">
      <FlexBox direction="row" justify="left" align="center">
        <LogoBg>
          <LogoImage src={Avocado} alt="Avocado Icon by https://www.flaticon.com/authors/freepik"/>
          <FlexBox direction="column" justify="center" align="left">
            <LogoText>
              FitTime
            </LogoText>
            <LogoTitle>
              Nutritional Calculator and Dietary Advice
            </LogoTitle>
          </FlexBox>
        </LogoBg>
        {/* <Menu>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem active>Calculator</MenuItem>
            <MenuItem>Knowledge</MenuItem>
            <MenuItem>About</MenuItem>
          </MenuList>
        </Menu> */}
      </FlexBox>
      <Button>Login</Button>
    </FlexBox>
  )
}

export default NavBar