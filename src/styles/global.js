import { injectGlobal } from '@emotion/css'

injectGlobal`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #9FADBD;
  }

  //? font:size: 16px; (Desktop)
  html {
    @media (min-width: 1080px) {
      font-size: 93.75%; //! 15px
    }

    @media (max-width: 768px) {
      font-size: 87.5%; //! 14px
    }
    
    @media (max-width: 425px) {
      font-size: 81.25%;
    }
  }

  //# REM = 1rem = font-size

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  #root {
    display: grid;
    grid-template-areas: 
    "header"
    "main"
    "footer";
  }
`
