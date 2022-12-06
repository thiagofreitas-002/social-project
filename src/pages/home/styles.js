import styled from '@emotion/styled'
import background from '../../assets/bg.png'

export const Container = styled.div`
  background-image: url(${background});
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .content {
    margin-left: 6.25rem;
    padding-top: 1.5rem;
    mix-blend-mode: multiply;

    h1 {
      text-align: left;
      font-size: 12.5rem;
      font-weight: bold;
      line-height: 80%;
      letter-spacing: -0.02em;
      /* mix-blend-mode: multiply; */
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

  @media (max-width: 768px) {
    .content {
      margin-bottom: auto;
      margin-left: 5rem;

      .title {
        font-size: 3rem;
      }

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
  }
`

export const Button = styled.div`
  position: absolute;
  bottom: 45px;
  right: 80px;
  display: flex;
  align-items: center;
  position: absolute;

  &:hover img {
    transform: rotate(65deg) translateY(-30px);
  }

  img {
    position: absolute;
    left: -50px;
    top: -15px;
    width: 3.25rem;
    transform: rotate(-30deg);
    transition: 200ms;
  }

  a {
    color: #000;
    font-weight: 600;
    font-size: 2rem;
    line-height: 80.4%;
    letter-spacing: -0.065em;
    text-align: left;
    background: #ff9900;
    box-shadow: 12px 10px 0px 0px rgb(0 94 26);
    padding: 0.625rem 0.625rem 0.625rem 1.25rem;
    max-width: 17.875rem;
    width: 100%;
    text-transform: uppercase;
  }

  @media (max-width: 425px) {
    right: 50%;
    transform: translateX(50%);

    img {
      display: none;
    }

    a {
      border-radius: 6px;
      box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.4);
      padding: 1rem 3rem;
    }
  }
`
