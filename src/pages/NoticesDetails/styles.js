import styled from "@emotion/styled";
export const Container = styled.div`
  font-family: var(--notices-datails-font);
`;

export const Content = styled.div`
  max-width: calc(2 / 3 * 100vw);
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: #000;
    font-weight: 500;
    padding: 0.375rem;
    font-size: 1.5rem;
    border-radius: 8px;
    background: #ff9900;
    text-transform: uppercase;
    transition: 200ms;

    position: fixed;
    top: 1rem;
    left: 1rem;

    &:hover {
      filter: brightness(0.9);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    filter: blur(0.03rem);
    transition: 200ms;

    &:hover {
      filter: blur(0);
    }
  }

  #title {
    color: #111111;
    font-weight: 700;
    font-size: 3.5rem;
    margin: 1rem 0;
    line-height: 3.875rem;
    padding: 0 2rem;
    text-align: center;
  }
`;

export const Comp = styled.div`
  padding: 0.875rem 2.5rem;
  width: calc(1 / 2 * 100vw);

`;
export const TextContent = styled.div`
  min-height: 50vh;

  color: #333333;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;

  a {
    color: #245633;
    text-decoration: underline;
  }
`;

export const Comments = styled.div`
  .utterances {
    max-width: 100vw !important;
  }
`;
