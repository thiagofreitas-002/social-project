import styled from "@emotion/styled";
import background from "../../assets/bg.png";

export const Container = styled.div`
  background-image: url(${background});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  .sub-container {
    position: absolute;
    margin-left: 15%;
    margin-top: 25%;

    h1 {
      font-size: 200px;
      font-weight: bold;
      line-height: 80%;
      letter-spacing: -0.02em;
      mix-blend-mode: multiply;
    }

    .bem {
      color: rgba(255, 153, 0, 0.8);
    }

    .vindo {
      color: rgba(0, 94, 26, 0.8);
    }

    span {
      color: rgba(255, 153, 0, 0.8);
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
      line-height: 80.4%;
      letter-spacing: -0.065em;

      mix-blend-mode: multiply;
    }
  }
`;
