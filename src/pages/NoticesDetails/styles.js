import styled from "@emotion/styled";
export const Container = styled.div`
  width: 100%;
  background-color: var(--yellow);
`;

export const Content = styled.div`
  max-width: 68.75rem;
  padding: 0 3.125rem;
  min-height: 100vh;
  margin: 0 auto;
  background: rgba(0, 94, 26);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;

  h1,
  p {
    color: #ffff;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: #000;
    font-weight: 300;
    padding: 0.375rem;
    font-size: 1.5rem;
    border-radius: 8px;
    background: #ff9900;
    text-transform: uppercase;
    transition: 200ms;

    position: fixed;
    bottom: 10px;
    right: 10px;

    &:hover {
      filter: brightness(0.9);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }
  h1 {
    padding-top: 10px;
  }
`;

export const Comp = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  min-height: 100vh;
  font-family: Roboto;

  #title {
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  hr {
    margin: 0.5rem 0;
  }
`;
