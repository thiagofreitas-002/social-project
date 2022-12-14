import styled from "@emotion/styled";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 0 3.125rem;
  background: #ff9900;
`;

export const Bloco = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  ul {
    display: flex;
    list-style: none;
  }

  h3 {
    font-size: 25px;
  }

  .bloco1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h3{
      color: #005e1a;
    }

    a{
      color: #005e1a;
    }

    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.7rem;
    }
  }

  .bloco2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 34px;

    h3{
      color: #005e1a;
    }

      ul{
        display: flex;
        justify-content: space-around;
      }
  }
`;
