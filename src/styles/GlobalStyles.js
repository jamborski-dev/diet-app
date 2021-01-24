import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  /* Main Colors */
  --bg-grad-dark: #21243D; // navy
  --bg-grad-light: #3A406E;
  --bg-dark-blue: #121B2C; // dark navy
  --bg-light-blue: #3A416F; // lighter navy
  --bg-dark-navy: #111A2C; // card dark bg
  --accent-blue: #5468FF; 
  --accent-light-blue: #1dbad6; 
  --accent-green: #DFFF31; 
  --accent-orange: #FFA200; 
  --accent-pink: #FF3B90;
  --bg-light: #fff; // light bg

  /* Headers */
  --text-primary-light: #fff; // white
  --text-primary-dark: #868BAF; // light navy
  
  --text-secondary-light: #fff; // white
  --text-secondary-dark: #868BAF; // light navy
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
}

p {
  font-size: 1rem;
  line-height: 1.6rem;
  margin-bottom: 2rem;
  max-width: min(500px, 65ch);
}

circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

`
export default GlobalStyle