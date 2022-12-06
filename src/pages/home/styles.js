import styled from '@emotion/styled'
import background from '../../assets/bg.png'

export const Container = styled.div`
  background-image: url(${background});
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    margin-left: 6.25rem;
    padding-top: 1.5rem;

    h1 {
      text-align: left;
      font-size: 12.5rem;
      font-weight: bold;
      line-height: 80%;
      letter-spacing: -0.02em;
      mix-blend-mode: multiply;
      color: rgba(255, 153, 0, 0.8);

      .vindo {
        color: rgba(0, 94, 26, 0.8);
        display: block;
      }
    }

    .title {
      color: rgba(255, 153, 0, 0.8);
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 4rem;
      line-height: 80.4%;
      letter-spacing: -0.065em;

      mix-blend-mode: multiply;
    }
  }

  .button-container {
    position: absolute;
    bottom: 45px;
    right: 80px;
  }

  @media (max-width: 768px) {
    .content {
      margin-bottom: auto;
      margin-left: 5rem;

      h1 {
        font-size: 7.5rem;
      }
    }
  }

  @media (max-width: 425px) {
    .content {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 25px);
      margin-left: 0;
      padding-top: 0;

      .title {
        font-size: 2rem;
      }

      h1 {
        font-size: 5.5rem;
      }
    }

    .button-container {
      right: 50%;
      transform: translateX(50%);
    }
  }
`
