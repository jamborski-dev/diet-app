import styled from 'styled-components'
import colorScheme from '../../styles/colorScheme'

export const NavBarBox = styled.div`
  padding: 0;
  padding-right: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  grid-area: navbar;
`

export const LogoImage = styled.img`
  height: 40px;
  margin-right: 3px;
  transform: rotate(20deg);
`

export const LogoText = styled.h1`
  display: inline;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.6rem;
  margin: 0;
  color: ${colorScheme.text.headerDark};
`

export const LogoTitle = styled.span`
  display: inline;
  font-size: .8rem;
  font-weight: 300;
  color: ${colorScheme.text.headerDark};
`

export const LogoBg = styled.div`
  background: ${colorScheme.bg.light};
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 2rem;
  padding-right: 1.4rem;
  margin-right: 1rem;
`

export const Menu = styled.nav`
  font-size: .9rem;
  color: ${colorScheme.text.light};
`

export const MenuList = styled.ul`
  list-style: none;
  display: inline;
  position: relative;
`
export const MenuItem = styled.li`
  display: inline;
  margin-right: 2rem;
  position: relative;
  cursor: pointer;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    z-index: 100;
    width: 120%;
    height: 2px;
    left: -10%;
    bottom: -7px;
    background: ${({ active }) => active ? colorScheme.accent.green : 'none' };
  }
`