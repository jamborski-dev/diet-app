import styled from 'styled-components'

export const MainGrid = styled.div`

  --navbar-height: 90px;

  width: 100%;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-rows: var(--navbar-height) calc(auto - var(--navbar-height)) 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    "navbar navbar navbar"
    "col_left col_mid col_right"
    "content content content";

`