import { injectGlobal } from '@emotion/css'

injectGlobal`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //? font:size: 16px; (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //! 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //! 14px
    }
  }

  //# REM = 1rem = font-size

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: grid;
    place-items: center;
  }
`
