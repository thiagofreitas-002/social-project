import { injectGlobal } from "@emotion/css";

injectGlobal`
  :root {
    --nav-height: 4.25rem;
    --yellow:rgba(255, 153, 0,0.88);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #fff;
  }

  //? font:size: 16px; (Desktop)
  html {
    @media (max-width: 1024px) {
      font-size: 93.75%; //! 15px
    }

    @media (max-width: 768px) {
      font-size: 87.5%; //! 14px
    }

    @media (max-width: 425px) {
      font-size: 81.25%; //! 13px
    }
    
    @media (max-width: 300px) {
      font-size: 75%; //! 12px
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
`;
