import styled from 'styled-components'

export const H2 = styled.h2`
  font-size: 1.9rem;
  position: relative;
  margin-top: 0;
  margin-bottom: 3rem;

  &:after {
    display: block;
    position: absolute;
    z-index: 100;
    width: 20%;
    height: 3px;
    left: 0;
    bottom: -10px;
    content: " ";
    border-radius: 5px;
    background: var(--accent-green);
  }
`