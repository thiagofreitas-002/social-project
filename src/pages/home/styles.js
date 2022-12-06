import styled from '@emotion/styled'
import background from '../../assets/bg.png'

export const Container = styled.div`
  background-image: url(${background});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    position: absolute;
    margin-left: 15%;
    margin-top: 25%;

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

  .button-container{
    position: absolute;
    bottom: 45px;
    right: 80px;
  }

  @media (max-width: 425px) {
    .content {
      padding: 25px 30px;
      margin-top: 0;
      margin-left: 0;

      .title {
        font-size: 2rem;
      }

      h1 {
        font-size: 5.5rem;
      }
    }
  }
`
