import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
  padding: 1.25rem 1.875rem;
  background: #005e1a;
  min-height: 15rem;
  border-radius: 0px 6px 6px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1.25rem;
    height: 12.5rem;
    width: 0.875rem;
    background-color: #ff9900;
  }

  h1 {
    color: #fff;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 80.4%;
    letter-spacing: 0.01em;
  }

  p {
    color: #fff;
    font-size: 1.25rem;
    letter-spacing: 0.01em;
  }
`;
